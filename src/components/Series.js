import React from "react";
import useEntries from "../libs/useEntries";

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
        data.map((serie) => {
          return <div>{serie.title}</div>;
        })}
    </div>
  );
};

export default Series;
