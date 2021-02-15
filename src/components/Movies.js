import React from "react";
import useEntries from "../libs/useEntries";
import Entry from "./Entry";

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
        data
          .filter((movie) => movie.releaseYear >= 2010)
          .filter((movie) => movie.programType === "movie")
          .sort((movieA, movieB) => movieA.title > movieB.title)
          .slice(0, 20)
          .map((movie) => (
            <Entry
              key={movie.title}
              title={movie.title}
              url={movie.images["Poster Art"].url}
            />
          ))}
    </div>
  );
};

export default Movies;
