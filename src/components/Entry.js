import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cStyles } from "../styles/styles";

const Entry = ({ title, url }) => {
  return (
    <div className={cStyles.entry}>
      <LazyLoadImage
        className={cStyles.image}
        effect="blur"
        src={url}
        alt="entry"
      />
      <p className={cStyles.title}>{title}</p>
    </div>
  );
};

export default Entry;
