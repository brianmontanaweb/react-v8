import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "../models/APIResponses.types";

const fetchPet: QueryFunction<PetAPIResponse, ["details", string]> = async ({
  queryKey,
}) => {
  const id = queryKey[1];
  const apiResponse = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiResponse.ok) throw new Error(`details/${id} failed to fetch`);
  return apiResponse.json();
};

export default fetchPet;
