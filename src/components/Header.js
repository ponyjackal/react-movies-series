import React from "react";
import { cStyles } from "../styles/styles";

const Header = ({ subTitle }) => {
  return (
    <div className={cStyles.header}>
      <div className={cStyles.headerTop}>
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
      <div className={cStyles.headerBottom}>
        <p className={cStyles.subTitle}>{subTitle}</p>
      </div>
    </div>
  );
};

export default Header;
