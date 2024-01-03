import React, { useEffect, useState } from "react";
import {
  faAngleDown,
  faAngleUp,
  faEllipsis,
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Left_Side_bar_afterLogin from "./Left_Side_bar_afterLogin";
import Profile_Dropdown from "./profile-dropdown/Profile_Dropdown";
import DropDown from "./profile-dropdown/DropDown";

const Header = ({ setLognIn }) => {
  const [userData, setUserData] = useState();
  const [toggle, setToggle] = useState(false);
  const [profileDropDoen, setProfileDropDown] = useState(false);
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userDetails")));
  }, []);
  return (
    <div className="header-container">
      <div className="header-content-1">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2023/11/Reddit-New-Logo.png"
          alt="Reddit logo"
        />
        {userData && (
          <div>
            {" "}
            <div
              className="home-content-after-login"
              onClick={() => {
                setToggle((old) => !old);
              }}
            >
              <h3>
                <FontAwesomeIcon icon={faHouse} /> <span>Home</span>
              </h3>
              {toggle ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </div>
            <Left_Side_bar_afterLogin toggle={toggle} />
          </div>
        )}
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
      {userData && (
        <div className="icons-header">
          <img
            className="arrow-icon"
            src="https://www.shareicon.net/download/2015/10/06/113452_arrow_512x512.png"
            alt="arrow icon"
            width={22}
          />
        </div>
      )}
      <div className="img-banana">
        <img
          src="https://www.redditstatic.com/shreddit/assets/moments/recap/recap-banana-icon.svg"
          alt="img-banana"
        />
      </div>
      {userData && (
        <>
          <div className="icons-header">
            <img
              src="https://freepngimg.com/save/158648-chat-icon-download-hq/980x908"
              alt="chat icon"
              width={22}
            />
          </div>
          <div className="icons-header">
            <img
              src="https://www.iconpacks.net/icons/1/free-bell-icon-860-thumb.png"
              alt="Bell icon"
              width={22}
            />
          </div>
          <div className="plus-icon">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </>
      )}
      {!userData ? (
        <>
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
        </>
      ) : (
        <>
          <div className="dwopdown-container">
            <div className="advertise-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/411/411789.png"
                alt="advertise icon"
                width={22}
              />
              <span>Advertise</span>
            </div>
            <Profile_Dropdown
              toggle={profileDropDoen}
              setToggle={setProfileDropDown}
            />
            {profileDropDoen && (
              <div className="dropdownContainer-profile">
                <DropDown />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
