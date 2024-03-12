import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./Community_modal.css";
import { Tooltip } from "@mui/material";
import {
  faCircleInfo,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Community_Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [communityName, setCommunityName] = React.useState(null);
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const config = {
    headers: {
      Authorization: `Bearer ${userDetails.token}`,
      projectID: "7k1ct68pbbmr",
    },
  };
  const formData = new FormData();
  formData.append("name", communityName);
  // console.log(communityName.replace("/r", ""));

  const createCommunity = async () => {
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/reddit/channel/",
        formData,
        config
      );
      console.log(res);
      navigate(`/community/${res.data.data._id}/${res.data.data.name}`);
      sessionStorage.setItem("community", JSON.stringify(true));
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCommunityData = () => {
    createCommunity();
  };
  return (
    <div>
      <Button onClick={handleOpen} className="modal-btn">
        Create Community
      </Button>
      <Modal
        className="modal-container"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="box-size">
            <div className="comm-header">
              <h4>Create a community</h4>
              <p onClick={handleClose}>+</p>
            </div>
            <div className="border-line"></div>
            <div style={{ margin: "1rem 0" }}>
              <h4 style={{ color: "#797373" }} className="name">
                Name
              </h4>
              <div className="na-de">
                <p>
                  Community names including capitalization cannot be changed.
                </p>
                <Tooltip title="Names cannot have spaces(e.g., 'r/bookclub' not'r/book club'), must be between 3-21 characters, and underscores ('_') are the only special characters allowred. Avoid using solely trademarked names (e.g., '/FansOfAcme') not 'r/Acme').">
                  <FontAwesomeIcon icon={faCircleInfo} />
                </Tooltip>
              </div>
            </div>
            <div className="input-data">
              <input
                type="text"
                placeholder="Name"
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
              />
            </div>
            <div className="radio-btns">
              <div>
                <input type="radio" name="radio" id="public" defaultChecked />
                <label htmlFor="public">
                  <FontAwesomeIcon icon={faUser} />
                  <p>Public </p>
                  <span>
                    Anyone can view, post, and comment to this community
                  </span>
                </label>
              </div>
              <div>
                <input type="radio" name="radio" id="restricted" disabled />
                <label htmlFor="restricted">
                  <FontAwesomeIcon icon={faEye} />
                  <p>Restricted </p>
                  <span>
                    Anyone can view this community, but only approved users can
                    post
                  </span>
                </label>
              </div>{" "}
              <div>
                <input type="radio" name="radio" id="private" disabled />
                <label htmlFor="private">
                  <FontAwesomeIcon icon={faLock} />
                  <p>Private </p>
                  <span>
                    Only approved users can view and submit to this community
                  </span>
                </label>
              </div>
            </div>
            <div className="che-bo">
              <h4>Adult content</h4>
              <div>
                <input type="checkbox" name="che" id="che" defaultChecked />
                <label htmlFor="che">
                  <span>NSFW</span> 18+ year old community
                </label>
              </div>
            </div>
            <div className="btns-community">
              <button onClick={handleClose}>Cancle</button>
              <button className="comm-btn" onClick={handleCommunityData}>
                Create Community{" "}
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
