import React from "react";
import "./Profile_Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import Community_Modal from "../../Create_Community_modal/Community_Modal";
const DropDown = ({ setProfileDropDown }) => {
  const navigate = useNavigate();
  const handleUser = () => {
    localStorage.clear();
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    });
  };

  // switch button

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  return (
    <div className="dropdown-Container-pro">
      <div className="my-staf-div">
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
        {/* <li className="online-Status-btn">
          <p>Online Status</p>
          <FormControlLabel control={<IOSSwitch defaultChecked />} />
        </li> */}

        {/* <li className="head-home-lkjkhdk">Profile</li> */}
        <li
          className="head-home-lkjkhdk"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <span>Create Avatar</span>
        </li>
        <li
          className="head-home-lkjkhdk"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <span>User Settings</span>
        </li>
        {/* <div className="empty"></div> */}
        {/* <p className="opt">
          <img
            src="https://www.iconpacks.net/icons/3/free-view-icon-6444-thumb.png"
            alt="plus"
            width={22}
          />{" "}
          <span>View Options</span>
        </p> */}
        {/* <li
          className="head-home-lkjk"
          onClick={() => {
            navigate("/empty");
          }}
        >
          <span>Dark Mode</span>
        </li> */}
        <div className="empty"></div>
        <p className="opti">
          <img
            src="https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_11-512.png"
            alt="primium icon"
            width={22}
          />
          <span>
            <Community_Modal />
          </span>
        </p>
        <p
          className="opti"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/411/411789.png"
            alt="avatar icon"
            width={22}
          />
          <span>Advertise on Reddit</span>
        </p>
        <p
          className="opti"
          onClick={() => {
            navigate("/premimum");
            setProfileDropDown(false);
          }}
        >
          <img
            src="https://static.thenounproject.com/png/1407038-200.png"
            alt="avatar icon"
            width={22}
          />
          <span>Premium</span>
        </p>
        <p
          className="opti"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4406/4406266.png"
            alt="avatar icon"
            width={22}
          />
          <div
            className="expo"
            onClick={() => {
              navigate("/empty");
              setProfileDropDown(false);
            }}
          >
            <span>Explore</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </p>
        <p
          className="opti"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <img
            src="https://static-00.iconduck.com/assets.00/question-mark-circled-icon-512x512-wsm5hkwj.png"
            alt="avatar icon"
            width={22}
          />
          <span>Help Center</span>
        </p>
        <p
          className="opti"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <img
            src="https://www.thesslstore.com/blog/wp-content/uploads/2017/05/circle-with-i-1.png"
            alt="avatar icon"
            width={22}
          />
          <div
            className="more"
            onClick={() => {
              navigate("/empty");
              setProfileDropDown(false);
            }}
          >
            <span>More</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </p>
        <p className="opti">
          <img
            src="https://static.thenounproject.com/png/2017700-200.png"
            alt="avatar icon"
            width={22}
          />
          <span>Terms & Policies</span>
        </p>
        <li
          className="head-home-lkjk"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <span>User Agreement</span>
        </li>
        <li
          className="head-home-lkjk"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <span>Pricacy Policy</span>
        </li>
        <li
          className="head-home-lkjk"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <span>Content Policy</span>
        </li>
        <li
          className="head-home-lkjk"
          onClick={() => {
            navigate("/empty");
            setProfileDropDown(false);
          }}
        >
          <span>Moderator Code of Conduct</span>
        </li>
        <div className="unmjo"></div>
        <li onClick={handleUser}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-3/24/018_128_arrow_exit_logout-512.png"
            alt="avatar icon"
            width={22}
          />
          <span>Log Out</span>
        </li>
        <p className="reddit_inc">Reddit, Inc. © 2024. All rights reserved.</p>
      </ul>
    </div>
  );
};

export default DropDown;
