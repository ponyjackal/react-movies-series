import React from "react";
import Header from "./Header";

const Layout = (props) => {
  const { component: Component } = props;
  return (
    <div>
      <Header />
      <Component />
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
