import React, { useState } from "react";
import "./Profile_Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";
const Profile_Dropdown = ({ toggle, setToggle }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  return (
    <div>
      <div
        className="dropdown-container"
        onClick={() => {
          setToggle((old) => !old);
        }}
      >
        <div className="dropdown-profile">
          <img
            src="https://i.redd.it/bpo63ls7pi4a1.png"
            alt="profile logo"
            width={22}
            height={30}
          />
          <div>
            <p>{userData.name}</p>
            <div className="name-container-data">
              <img
                src="https://www.freepnglogos.com/uploads/red-star-png/red-star-stars-png-images-star-clipart-images-icons-2.png"
                alt="star image"
                width={15}
              />
              <span>1 karma</span>
            </div>
          </div>
        </div>
        <div>
          {toggle ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile_Dropdown;
