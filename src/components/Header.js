import React from "react";

const cStyles = {
  header:
    "flex flex-row justify-between bg-blue-600 py-5 pl-56 pr-10 shadow-xl",
  headerTitle: "font-sans font-bold text-4xl antialiased text-white",
  headerLeft: "flex flex-row items-center space-x-4",
  login: "font-sans text-xl text-white",
  freeTrial:
    "font-sans text-xl text-white bg-gray-800 px-2 py-1 hover:bg-gray-700",
};

const Header = () => {
  return (
    <div className={cStyles.header}>
      <p className={cStyles.headerTitle}>DEMO Streaming</p>
      <div className={cStyles.headerLeft}>
        <a className={cStyles.login} href="/">
          Log in
        </a>
        <a className={cStyles.freeTrial} href="/">
          Start your free trial
        </a>
      </div>
    </div>
  );
};

export default Header;
