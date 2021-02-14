import React from "react";

const Layout = (props) => {
  const { component: Component } = props;
  return (
    <div>
      <h1>Header</h1>
      <Component />
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
