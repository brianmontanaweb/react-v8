import { QueryFunction } from "@tanstack/react-query";
import { BreedListAPIResponse } from "../models/APIResponses.types";

const fetchBreedList: QueryFunction<
  BreedListAPIResponse,
  ["breeds", string | undefined]
> = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiResponse = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  if (!apiResponse.ok) throw new Error(`breeds/${animal} failed to fetch`);
  return apiResponse.json();
};

export default fetchBreedList;
