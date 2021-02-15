import React from "react";
import { Link } from "react-router-dom";
import { cStyles } from "../styles/styles";

const Footer = () => {
  return (
    <div className={cStyles.footer}>
      <div className={cStyles.footerTop}>
        <div className={cStyles.menu}>
          <Link to="/home" className={cStyles.menuItem}>
            Home
          </Link>
          <Link to="/" className={cStyles.menuItem}>
            Terms and Conditions
          </Link>
          <Link to="/" className={cStyles.menuItem}>
            Privacy Policy
          </Link>
          <Link to="/" className={cStyles.menuItem}>
            Collection Statement
          </Link>
          <Link to="/" className={cStyles.menuItem}>
            Help
          </Link>
          <Link to="/">Manage Account</Link>
        </div>
        <div>
          <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
        </div>
      </div>
      <div className={cStyles.footBottom}>
        <div className={cStyles.socialContainer}>
          <img
            className={cStyles.socialIcon}
            src="assets/social/facebook-white.svg"
            alt=""
          />
          <img
            className={cStyles.socialIcon}
            src="assets/social/twitter-white.svg"
            alt=""
          />
          <img
            className={cStyles.socialIcon}
            src="assets/social/instagram-white.svg"
            alt=""
          />
        </div>
        <div className={cStyles.storeContainer}>
          <img
            className={cStyles.storeIcon}
            src="assets/store/app-store.svg"
            alt=""
          />
          <img
            className={cStyles.storeIcon}
            src="assets/store/play-store.svg"
            alt=""
          />
          <img
            className={cStyles.storeIcon}
            src="assets/store/windows-store.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
