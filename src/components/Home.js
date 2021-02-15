import React from "react";

const cStyles = {
  homeHeader: "flex flex-row justify-between bg-gray-700 py-3 px-6 shadow-xl",
  subTitle: "font-sans font-bold text-2xl antialiased text-white mx-56",
};

const Home = () => {
  return (
    <div>
      <div className={cStyles.homeHeader}>
        <p className={cStyles.subTitle}>Popular Titles</p>
      </div>
    </div>
  );
};

export default Home;
