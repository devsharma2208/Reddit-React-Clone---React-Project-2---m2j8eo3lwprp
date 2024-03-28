import React, { useContext, useEffect, useState } from "react";
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
import { context } from "../ContextApi/ContextProvider";

const Header = ({ setLognIn }) => {
  const { setSearch, themeColor } = useContext(context);
  const [userData, setUserData] = useState();
  const [toggle, setToggle] = useState(false);
  const [profileDropDoen, setProfileDropDown] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userDetails")));
  }, []);
  return (
    <div className={`header-container ${themeColor && "darktheme"}`}>
      <div className="header-content-1">
        {userData && (
          <FontAwesomeIcon
            className="hemb-icon"
            icon={faBars}
            onClick={() => {
              setToggle((old) => !old);
            }}
          />
        )}
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2023/11/Reddit-New-Logo.png"
          alt="Reddit logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <img
          className={`singleRedditLogo ${!userData && "fjkdjfks"}`}
          src="https://seeklogo.com/images/R/reddit-icon-new-2023-logo-3F12137D65-seeklogo.com.png"
          alt="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
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
          placeholder="Search-Reddit "
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {userData && (
        <div
          className="icons-header chat-icon"
          onClick={() => navigate("/arrow")}
          style={{ cursor: "not-allowed" }}
        >
          <img
            className="arrow-icon"
            src="https://www.shareicon.net/download/2015/10/06/113452_arrow_512x512.png"
            alt="arrow icon"
            width={22}
          />
        </div>
      )}
      <div
        className="img-banana"
        onClick={() => navigate("/banana")}
        style={{ cursor: "not-allowed" }}
      >
        <img
          src="https://www.redditstatic.com/shreddit/assets/moments/recap/recap-banana-icon.svg"
          alt="img-banana"
        />
      </div>
      {userData && (
        <>
          <div
            className="icons-header chat-icon"
            onClick={() => navigate("/message")}
            style={{ cursor: "not-allowed" }}
          >
            <img
              src="https://freepngimg.com/save/158648-chat-icon-download-hq/980x908"
              alt="chat icon"
              width={22}
            />
          </div>
          <div
            className="icons-header"
            onClick={() => navigate("/notification")}
            style={{ cursor: "not-allowed" }}
          >
            <FontAwesomeIcon className="bar-icon" icon={faBell} />
          </div>
          <div className="plus-icon" onClick={() => navigate("/submit")}>
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
            style={{ cursor: "not-allowed" }}
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
          <div className="dot-icon" style={{ cursor: "not-allowed" }}>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </>
      ) : (
        <>
          <div className="dwopdown-container">
            <div
              className="advertise-icon"
              onClick={() => navigate("./empty")}
              style={{ cursor: "not-allowed" }}
            >
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
