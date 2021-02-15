import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const cStyles = {
  appContainer: "flex flex-col min-h-screen",
  main: "flex-grow",
};
const Layout = (props) => {
  const { component: Component, subTitle } = props;

  return (
    <div className={cStyles.appContainer}>
      <Header subTitle={subTitle} />
      <div className={cStyles.main}>
        <Component />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
