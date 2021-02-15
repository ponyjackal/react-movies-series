import React from "react";
import { Link } from "react-router-dom";

const cStyles = {
  footer:
    "flex flex-col justify-between bg-gray-900 text-gray-300 py-10 pl-56 pr-10 space-y-10",
  footerTop: "flex flex-col justify-between space-y-3",
  menu: "flex flex-row justify-start space-x-4",
  menuItem: "border-r-2 pr-4 border-gray-300",
  footBottom: "flex felx-row justify-between items-center py-5",
  socialContainer: "flex felx-row justify-start space-x-4",
  socialIcon: "w-10 h-10",
  storeContainer: "flex felx-row justify-end items-center space-x-4",
  storeIcon: "h-10",
};

const Footer = () => {
  return (
    <div className={cStyles.footer}>
      <div className={cStyles.footerTop}>
        <div className={cStyles.menu}>
          <Link to="/home" className={cStyles.menuItem}>
            Home
          </Link>
          <Link className={cStyles.menuItem}>Terms and Conditions</Link>
          <Link className={cStyles.menuItem}>Privacy Policy</Link>
          <Link className={cStyles.menuItem}>Collection Statement</Link>
          <Link className={cStyles.menuItem}>Help</Link>
          <Link>Manage Account</Link>
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
