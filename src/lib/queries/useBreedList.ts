import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../api/fetchBreedList";
import { Animal } from "../models/APIResponses.types";

export default function useBreedList(animal?: Animal): [string[], string] {
  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreedList,
  });
  return [results?.data?.breeds ?? [], results.status];
}
