import { FormEvent, useContext, useState } from "react";
import useBreedList from "../queries/useBreedList";
import Results from "./Results";
import fetchSearch from "../api/fetchSearch";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "../hooks/AdoptedPetContext";
import { Animal, ResultRequestParams } from "../models/APIResponses.types";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "" as Animal,
    breed: "",
  });
  const [animal, setAnimal] = useState("" as Animal);
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery({
    queryKey: ["search", requestParams],
    queryFn: fetchSearch,
  });
  const pets = results?.data?.pets ?? [];

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!(event.currentTarget instanceof HTMLFormElement)) return;
    const formData = new FormData(event.currentTarget);

    const formDataToRequestParams: ResultRequestParams = {
      animal: (formData.get("animal")?.toString() ?? "") as Animal,
      breed: formData.get("breed")?.toString() ?? "",
      location: formData.get("location")?.toString() ?? "",
    };
    setRequestParams(formDataToRequestParams);
  };

  return (
    <div className="mx-auto my-0 w-11/12">
      <form
        className="mb-10 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 p-10 shadow-lg"
        onSubmit={formSubmitHandler}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            name="location"
            id="location"
            placeholder="Location"
            className="search-input grayed-out-disabled"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(event) => {
              setAnimal(event.target.value as Animal);
            }}
            className="search-input grayed-out-disabled"
          >
            <option value="">Any animal</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            disabled={breeds.length === 0}
            className="search-input grayed-out-disabled"
          >
            <option value="">Any breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
          Submit
        </button>
      </form>
      <Results pets={pets}></Results>
    </div>
  );
};

export default SearchParams;
