import { createContext } from "react";
import { Pet } from "../models/APIResponses.types";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 0,
    name: "Twig",
    animal: "dog",
    description: "lorem",
    breed: "Poodle",
    images: [],
    city: "Chicago",
    state: "IL",
  },
  () => {},
]);

export default AdoptedPetContext;
