import React from "react";
import { Link } from "react-router-dom";

const cStyles = {
  home:
    "flex flex-row justify-start items-center py-5 pl-10 md:pl-36 lg:pl-56 pr-10 space-x-4 md:space-x-6 lg:space-x-10",
  link: "flex flex-col justify-start items-center w-48",
  item:
    "bg-placeholder bg-gray-900 bg-center px-10 py-20 cursor-pointer text-white text-2xl font-bold",
};

const Home = () => {
  return (
    <div className={cStyles.home}>
      <div className={cStyles.link}>
        <Link className={cStyles.item} to="/series">
          SERIES
        </Link>
        Popular Series
      </div>
      <div className={cStyles.link}>
        <Link className={cStyles.item} to="/movies">
          MOVIES
        </Link>
        Popular Movies
      </div>
    </div>
  );
};

export default Home;
