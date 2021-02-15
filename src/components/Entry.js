import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const cStyles = {
  entry: "flex flex-col items-center",
  image: "",
  title: "",
};
const Entry = ({ title, url }) => {
  return (
    <div className={cStyles.entry}>
      <LazyLoadImage className={cStyles.image} effect="blur" src={url} alt="" />
      <p className={cStyles.title}>{title}</p>
    </div>
  );
};

export default Entry;
