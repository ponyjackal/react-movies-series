import React from "react";
import useEntries from "../libs/useEntries";
import Entry from "./Entry";
import { cStyles } from "../styles/styles";

const Movies = () => {
  const { isLoading, error, data } = useEntries();

  if (isLoading)
    return (
      <div className={cStyles.entryContainer}>
        <p className={cStyles.loading}>Loading ...</p>
      </div>
    );
  if (error)
    return (
      <div className={cStyles.entryContainer}>
        <p className={cStyles.loading}>Oops, something went wrong...</p>
      </div>
    );

  return (
    <div className={cStyles.entryContainer}>
      {data &&
        data
          .filter((movie) => movie.releaseYear >= 2010)
          .filter((movie) => movie.programType === "movie")
          .sort((movieA, movieB) => movieA.title > movieB.title)
          .slice(0, 21)
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
