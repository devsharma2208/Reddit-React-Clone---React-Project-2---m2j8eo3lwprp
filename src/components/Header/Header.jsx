import {
  faEllipsis,
  faMagnifyingGlass,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const Header = ({ setLognIn }) => {
  return (
    <div className="header-container">
      <div className="header-content-1">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2023/11/Reddit-New-Logo.png"
          alt="Reddit logo"
        />
      </div>
      <div className="search-container">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            fontSize: "1.2rem",
            color: "rgb(164, 157, 157)",
          }}
        />

        <input
          className="input-search"
          type="search"
          placeholder="Search-Reddit"
        />
      </div>
      <div className="img-banana">
        <img
          src="https://www.redditstatic.com/shreddit/assets/moments/recap/recap-banana-icon.svg"
          alt="img-banana"
        />
      </div>
      <div className="lskhnkc">|</div>
      <div className="get-app-header">
        <FontAwesomeIcon className="bar-icon" icon={faQrcode} />

        <h4>Get App</h4>
      </div>
      <div
        className="login"
        onClick={() => {
          setLognIn(true);
        }}
      >
        <h4>Log In</h4>
      </div>
      <div className="dot-icon">
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
};
export default Header;
