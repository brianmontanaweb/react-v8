import { QueryFunction } from "@tanstack/react-query";
import {
  PetAPIResponse,
  ResultRequestParams,
} from "../models/APIResponses.types";

const fetchSearch: QueryFunction<
  PetAPIResponse,
  ["search", ResultRequestParams]
> = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );

  if (!res.ok) throw new Error("pet search failed");

  return res.json();
};

export default fetchSearch;
