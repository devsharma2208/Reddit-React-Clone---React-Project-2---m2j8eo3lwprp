import React, { useEffect, useState } from "react";
import {
  faAngleDown,
  faAngleUp,
  faBars,
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
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = ({ setLognIn }) => {
  const [userData, setUserData] = useState();
  const [toggle, setToggle] = useState(false);
  const [profileDropDoen, setProfileDropDown] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userDetails")));
  }, []);
  return (
    <div className="header-container">
      <div className="header-content-1">
        <FontAwesomeIcon
          className="hemb-icon"
          icon={faBars}
          onClick={() => {
            setToggle((old) => !old);
          }}
        />
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2023/11/Reddit-New-Logo.png"
          alt="Reddit logo"
        />
        <img
          className="singleRedditLogo"
          src="https://seeklogo.com/images/R/reddit-icon-new-2023-logo-3F12137D65-seeklogo.com.png"
          alt="logo"
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
            <Left_Side_bar_afterLogin toggle={toggle} setToggle={setToggle} />
          </div>
        )}
      </div>
      <div className="search-container">
        <FontAwesomeIcon
          className="search-icon injminmui"
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
        <div
          className="icons-header chat-icon"
          onClick={() => navigate("./empty")}
        >
          <img
            className="arrow-icon"
            src="https://www.shareicon.net/download/2015/10/06/113452_arrow_512x512.png"
            alt="arrow icon"
            width={22}
          />
        </div>
      )}
      <div className="img-banana" onClick={() => navigate("./empty")}>
        <img
          src="https://www.redditstatic.com/shreddit/assets/moments/recap/recap-banana-icon.svg"
          alt="img-banana"
        />
      </div>
      {userData && (
        <>
          <div
            className="icons-header chat-icon"
            onClick={() => navigate("./empty")}
          >
            <img
              src="https://freepngimg.com/save/158648-chat-icon-download-hq/980x908"
              alt="chat icon"
              width={22}
            />
          </div>
          <div className="icons-header" onClick={() => navigate("./empty")}>
            <FontAwesomeIcon className="bar-icon" icon={faBell} />
          </div>
          <div className="plus-icon" onClick={() => navigate("./empty")}>
            <FontAwesomeIcon className="hed-icons" icon={faPlus} />
          </div>
        </>
      )}
      {!userData ? (
        <>
          <div className="lskhnkc">|</div>
          <div
            className="get-app-header"
            onClick={() => alert("No App Available Now")}
          >
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
            <div className="advertise-icon" onClick={() => navigate("./empty")}>
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
                <DropDown setProfileDropDown={setProfileDropDown} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
