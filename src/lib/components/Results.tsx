import { Pet } from "../models/APIResponses.types";
import PetInfo from "./PetInfo";

interface IProps {
  pets: Pet[];
}

const Results = ({ pets }: IProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map(({ id, name, animal, breed, images, city, state }) => (
          <PetInfo
            key={id}
            id={id}
            name={name}
            animal={animal}
            breed={breed}
            images={images}
            location={`${city}, ${state}`}
          ></PetInfo>
        ))
      )}
    </div>
  );
};

export default Results;
