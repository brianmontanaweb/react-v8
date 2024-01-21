import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../api/fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreedList,
  });
  return [results?.data?.breeds ?? [], results.status];
}
