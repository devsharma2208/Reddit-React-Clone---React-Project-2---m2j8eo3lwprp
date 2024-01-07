import React from "react";
import { useNavigate } from "react-router-dom";
import Community_Modal from "../../Create_Community_modal/Community_Modal";

const After_login_Content_right = () => {
  const natigate = useNavigate();
  return (
    <div className="after-log-in-right-side-container">
      <div className="first-box-preimum">
        <div className="reddit-Premium-img">
          <img
            src="https://i.redd.it/veuemg4c8q171.jpg"
            alt="Reddit Premium img"
            height={50}
          />
          <div>
            <span>Reddit Premium</span>
            <p>The best Reddit experience</p>
          </div>
        </div>
        <div className="try-btn">
          <button>Try Now</button>
        </div>
      </div>
      <div className="create-comm-container-jdks">
        <div className="bg-img-right"></div>

        <div className="bg-img-tattu-container">
          <div className="bg-img-tattu"></div>
          <p>Home</p>
        </div>
        <div className="all-con-adfljk">
          <p className="community-text-p">
            Your personal Reddit frontpage. Come here to check in with your
            favorite communities.
          </p>
          <div style={{ borderBottom: "1px solid #e6e8eb" }}></div>
          <div>
            <div
              className="community-btn1"
              onClick={() => {
                natigate("submit");
              }}
            >
              <button>Create Post</button>
            </div>
            <div className="community-btn2">
              <button>
                <Community_Modal />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="last-comm-content-container">
        <div className="last-comm-content">
          <div>
            <p>User Agreement</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Content Policy</p>
            <p>Moderator Code Of Conduct</p>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid #e6e8eb" }}></div>
        <div className="last-comm-content-lang">
          <div>
            <p>English</p>
            <p>Français</p>
            <p>Italiano</p>
          </div>
          <div>
            <p>Deutsch</p>
            <p>Español</p>
            <p>Português</p>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid #e6e8eb" }}></div>
        <div>
          <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
            Reddit, Inc. © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default After_login_Content_right;
