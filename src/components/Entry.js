import React from "react";

const cStyles = {
  entry: "flex flex-row",
  image: "",
  title: "",
};
const Entry = ({ title, url }) => {
  return (
    <div className={cStyles.entry}>
      <img className={cStyles.image} src={url} alt="" />
      <p className={cStyles.title}>{title}</p>
    </div>
  );
};

export default Entry;
