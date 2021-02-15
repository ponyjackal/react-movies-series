import React from "react";
import { Link } from "react-router-dom";
import { cStyles } from "../styles/styles";

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
