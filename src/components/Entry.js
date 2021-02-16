import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cStyles } from "../styles/styles";

const Entry = ({ title, url }) => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const updateSize = () => {
      setWidth(document.getElementById("entry-card").offsetWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className={cStyles.entry} id="entry-card">
      <LazyLoadImage
        className={cStyles.image}
        effect="blur"
        src={url}
        alt="entry"
        height={width * 1.5}
        width={width}
      />
      <p className={cStyles.title}>{title}</p>
    </div>
  );
};

export default Entry;
