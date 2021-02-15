import React from "react";
import useEntries from "../libs/useEntries";

const cStyles = {
  moviesContainer: "py-5 pl-56 pr-10 grid grid-cols-7 gap-4",
  loading: "font-sans text-lg text-black",
};
const Movies = () => {
  const { isLoading, error, data } = useEntries();

  if (isLoading)
    return (
      <div className={cStyles.moviesContainer}>
        <p className={cStyles.loading}>Loading ...</p>
      </div>
    );
  if (error)
    return (
      <div className={cStyles.moviesContainer}>
        <p className={cStyles.loading}>Oops, something went wrong...</p>
      </div>
    );

  return (
    <div className={cStyles.moviesContainer}>
      {data &&
        data.map((movie) => {
          return <div>{movie.title}</div>;
        })}
    </div>
  );
};

export default Movies;
