import { useQuery } from "react-query";

const entryURL = "http://localhost:8000/entries";
export const fetchEntries = () => {
  return fetch(entryURL)
    .then((res) => res.json())
    .then((res) => res);
};

// export const fetchEntries = () =>
//   new Promise((resolve, reject) => {
//     return setTimeout(() => {
//       resolve(data.entries);
//     }, 3000);
//   });

const useEntries = () => {
  return useQuery("fetchEntries", fetchEntries);
};

export default useEntries;
