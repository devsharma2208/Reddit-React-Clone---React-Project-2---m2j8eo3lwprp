import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Left_Side_bar_afterLogin = ({ toggle, setToggle }) => {
  const navigate = useNavigate();
  const [userCommunity, setUserCommunity] = useState([]);
  const [toggleComm, setToggleComm] = useState(true);
  const community = JSON.parse(sessionStorage.getItem("community"));
  const userData = JSON.parse(localStorage.getItem("userDetails"));
  const config = {
    headers: {
      projectID: "7k1ct68pbbmr",
    },
  };
  const deleteCommunityConfig = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
      projectID: "7k1ct68pbbmr",
    },
  };
  const userCommunityAPI = async () => {
    try {
      const res = await axios.get(
        "https://academics.newtonschool.co/api/v1/reddit/channel",
        config
      );
      console.log(res.data.data);
      setUserCommunity(res.data.data);
      setToggleComm(false);
      sessionStorage.removeItem("community");
    } catch (err) {
      console.log(err);
    }
  };
  const deleteCommunity = async (id) => {
    try {
      const res = await axios.delete(
        `https://academics.newtonschool.co/api/v1/reddit/channel/${id}`,
        deleteCommunityConfig
      );
      console.log(res);
      setToggleComm(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (toggleComm || community) {
      userCommunityAPI();
    }
  }, [toggleComm, community]);
  return (
    <div>
      {toggle && (
        <div className="home-toggle-data-after-login">
          <input
            type="text"
            placeholder="Filter (Upcoming)"
            className="home-input-after-login"
          />
          <ul className="homw-all-content">
            <p className="head-home-lkjkhdk">Your Community</p>
            {userCommunity.map((item, index) => {
              return (
                <>
                  {userData.id === item.owner._id && (
                    <div key={index}>
                      <div className="commUser">
                        <img
                          src="https://i.redd.it/snoovatar/avatars/31f83df2-a2b7-440d-b431-c6d611313e54.png"
                          alt="arrow icon"
                        />
                        <div className="cummunityDetails">
                          <span
                            className="communityName"
                            onClick={() => {
                              navigate(
                                `/community/${
                                  item.channel ? item.channel._id : 2
                                }/${item.name}`
                              );
                              setToggle(false);
                            }}
                          >
                            {item.name}
                          </span>
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            onClick={() => deleteCommunity(item._id)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
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
                class="arrow-icon-dropdown"
                src="https://www.shareicon.net/download/2015/10/06/113452_arrow_512x512.png"
                alt="arrow icon"
                width="22"
              />
              <span>Popular</span>
            </li>

            <li
              className="opiuoiu"
              onClick={() => {
                navigate("/empty");
                setToggle(false);
              }}
            >
              <img
                src="https://www.shareicon.net/data/512x512/2015/12/01/680841_button_512x512.png"
                alt="all image icon"
                width="22"
              />
              <span>All</span>
            </li>
            <p className="head-home-lkjkhdk">OTHERS</p>
            <li
              onClick={() => {
                navigate("/empty");
                setToggle(false);
              }}
            >
              <img
                src="https://freepngimg.com/save/17678-reddit-png-picture/296x406"
                alt="user Icon"
                width={22}
              />
              <span>User Setting</span>
            </li>
            <li
              onClick={() => {
                navigate("/empty");
                setToggle(false);
              }}
            >
              <img
                src="https://freepngimg.com/save/17678-reddit-png-picture/296x406"
                alt="user Icon"
                width={22}
              />
              <span>Messages</span>
            </li>
            <li
              onClick={() => {
                navigate("submit");
                setToggle(false);
              }}
            >
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-PNG-Cutout.png"
                alt="plus"
                width={22}
              />{" "}
              <span>Create Post</span>
            </li>
            <li
              onClick={() => {
                navigate("/empty");
                setToggle(false);
              }}
            >
              <img
                src="https://www.iconpacks.net/icons/1/free-bell-icon-860-thumb.png"
                alt="Bell icon"
                width="22"
              />{" "}
              <span>Notifications</span>
            </li>
            <li
              onClick={() => {
                navigate("/premimum");
                setToggle(false);
              }}
            >
              <img
                src="https://static.thenounproject.com/png/1407038-200.png"
                alt="primium icon"
                width={22}
              />
              <span>Premium</span>
            </li>
            <li
              onClick={() => {
                navigate("/empty");
                setToggle(false);
              }}
            >
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
