import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import fetchPet from "../api/fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import AdoptedPetContext from "../hooks/AdoptedPetContext";
import { PetAPIResponse } from "../models/APIResponses.types";

const Details = () => {
  const { id } = useParams();

  if (!id) throw new Error(`No valid ID: ${id}`);

  const results = useQuery({
    queryKey: ["details", id],
    queryFn: fetchPet,
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">😵‍💫</h2>
      </div>
    );
  }

  const pet = results?.data?.pets[0];

  if (!pet) throw new Error(`Pet is not valid for id: ${id}`);

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}</h1>
              <div className="buttons">
                <button
                  className="btn-primary"
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button
                  className="btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

const DetailsWithErrorBoundary = () => (
  <ErrorBoundary>
    <Details />
  </ErrorBoundary>
);

export default DetailsWithErrorBoundary;
