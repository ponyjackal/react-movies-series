import React from "react";
import useEntries from "../libs/useEntries";
import Entry from "./Entry";

const cStyles = {
  seriesContainer: "py-5 pl-56 pr-10 grid grid-cols-7 gap-4",
  loading: "font-sans text-lg text-black",
};
const Series = () => {
  const { isLoading, error, data } = useEntries();

  if (isLoading)
    return (
      <div className={cStyles.seriesContainer}>
        <p className={cStyles.loading}>Loading ...</p>
      </div>
    );
  if (error)
    return (
      <div className={cStyles.seriesContainer}>
        <p className={cStyles.loading}>Oops, something went wrong...</p>
      </div>
    );

  return (
    <div className={cStyles.seriesContainer}>
      {data &&
        data
          .filter((serie) => serie.releaseYear >= 2010)
          .filter((serie) => serie.programType === "series")
          .sort((serieA, serieB) => serieA.title > serieB.title)
          .slice(0, 20)
          .map((serie) => (
            <Entry
              key={serie.title}
              title={serie.title}
              url={serie.images["Poster Art"].url}
            />
          ))}
    </div>
  );
};

export default Series;
