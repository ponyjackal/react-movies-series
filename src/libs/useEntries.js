import { useQuery } from "react-query";

const entryURL = "http://localhost:8000/entries";
const fetchEntries = () => {
  return fetch(entryURL)
    .then((res) => res.json())
    .then((res) => res);
};

const useEntries = () => {
  return useQuery("fetchEntries", fetchEntries);
};

export default useEntries;
