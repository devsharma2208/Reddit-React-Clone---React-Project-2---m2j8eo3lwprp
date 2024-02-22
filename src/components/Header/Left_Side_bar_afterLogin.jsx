import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Left_Side_bar_afterLogin = ({ toggle, setToggle }) => {
  const navigate = useNavigate();
  return (
    <div>
      {toggle && (
        <div className="home-toggle-data-after-login">
          <input
            type="text"
            placeholder="Filter"
            className="home-input-after-login"
          />
          <ul className="homw-all-content">
            <p className="head-home-lkjkhdk">FEEDS</p>
            <li
              onClick={() => {
                navigate("/");
                setToggle(false);
              }}
            >
              <FontAwesomeIcon icon={faHouse} /> <span>Home</span>
            </li>
            <li>
              <img
                class="arrow-icon"
                src="https://www.shareicon.net/download/2015/10/06/113452_arrow_512x512.png"
                alt="arrow icon"
                width="22"
              />
              <span>Popular</span>
            </li>
            <li>
              <img
                src="https://www.shareicon.net/data/512x512/2015/12/01/680841_button_512x512.png"
                alt="all image icon"
                width="22"
              />
              <span>All</span>
            </li>
            <p className="head-home-lkjkhdk">OTHERS</p>
            <li>
              <img
                src="https://freepngimg.com/save/17678-reddit-png-picture/296x406"
                alt="user Icon"
                width={22}
              />
              <span>User Setting</span>
            </li>
            <li>
              <img
                src="https://freepngimg.com/save/17678-reddit-png-picture/296x406"
                alt="user Icon"
                width={22}
              />
              <span>Messages</span>
            </li>
            <li>
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-PNG-Cutout.png"
                alt="plus"
                width={22}
              />{" "}
              <span>Create Post</span>
            </li>
            <li>
              <img
                src="https://www.iconpacks.net/icons/1/free-bell-icon-860-thumb.png"
                alt="Bell icon"
                width="22"
              />{" "}
              <span>Notifications</span>
            </li>
            <li>
              <img
                src="https://static.thenounproject.com/png/1407038-200.png"
                alt="primium icon"
                width={22}
              />
              <span>Premium</span>
            </li>
            <li>
              <img
                src="https://static.vecteezy.com/system/resources/previews/020/911/731/original/profile-icon-avatar-icon-user-icon-person-icon-free-png.png"
                alt="avatar icon"
                width={22}
              />
              <span>Avatar</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Left_Side_bar_afterLogin;
