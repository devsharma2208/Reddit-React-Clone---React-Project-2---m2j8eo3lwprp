import React from "react";

import "./Profile_Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
const DropDown = () => {
  const handleUser = () => {
    localStorage.clear();
  };
  return (
    <div className="dropdown-Container">
      <div>
        <img
          style={{
            border: "1px solid",
            borderRadius: "50%",
            padding: "0.2rem",
          }}
          src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png"
          alt="profile"
          width={15}
        />
        <span>My Stuff</span>
      </div>
      <ul className="homw-all-content profile-dropdown-details">
        <li>
          <span>Online Status</span>
        </li>
        <li>
          <img
            src="https://www.redditstatic.com/shreddit/assets/moments/recap/recap-banana-icon.svg"
            alt="all image icon"
            width="22"
          />
          <span>Reddit Recap</span>
          <span>new</span>
        </li>
        <li className="head-home-lkjkhdk">Profile</li>
        <li>
          <span>Create Avatar</span>
        </li>
        <li>
          <span>User Settings</span>
        </li>
        <p>
          <img
            src="https://www.iconpacks.net/icons/3/free-view-icon-6444-thumb.png"
            alt="plus"
            width={22}
          />{" "}
          <span>View Options</span>
        </p>
        <li>
          <span>Dark Mode</span>
        </li>
        <li>
          <img
            src="https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_11-512.png"
            alt="primium icon"
            width={22}
          />
          <span>Create a Community</span>
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/411/411789.png"
            alt="avatar icon"
            width={22}
          />
          <span>Advertise on Reddit</span>
        </li>
        <li>
          <img
            src="https://static.thenounproject.com/png/1407038-200.png"
            alt="avatar icon"
            width={22}
          />
          <span>Premium</span>
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4406/4406266.png"
            alt="avatar icon"
            width={22}
          />
          <span>Explore</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          <img
            src="https://static-00.iconduck.com/assets.00/question-mark-circled-icon-512x512-wsm5hkwj.png"
            alt="avatar icon"
            width={22}
          />
          <span>Help Center</span>
        </li>
        <li>
          <img
            src="https://www.thesslstore.com/blog/wp-content/uploads/2017/05/circle-with-i-1.png"
            alt="avatar icon"
            width={22}
          />
          <span>More</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          <img
            src="https://static.thenounproject.com/png/2017700-200.png"
            alt="avatar icon"
            width={22}
          />
          <span>Terms & Policies</span>
        </li>
        <li>
          <span>User Agreement</span>
        </li>
        <li>
          <span>Pricacy Policy</span>
        </li>
        <li>
          <span>Content Policy</span>
        </li>
        <li>
          <span>Moderator Code of Conduct</span>
        </li>
        <li onClick={handleUser}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-3/24/018_128_arrow_exit_logout-512.png"
            alt="avatar icon"
            width={22}
          />
          <span>Log Out</span>
        </li>
        <p>Reddit, Inc. © 2024. All rights reserved.</p>
      </ul>
    </div>
  );
};

export default DropDown;
