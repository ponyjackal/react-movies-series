import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { cStyles } from "../styles/styles";

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
