import React from "react";
import "./Empty.css";
import { useNavigate } from "react-router-dom";
const Empty = () => {
  const navigate = useNavigate();
  return (
    <div className="empty_container">
      <h1>Hey Thanks for visit this Page....</h1>
      <p>This page will be up as soon as possible</p>
      <p>
        Go Back to home with{" "}
        <span onClick={() => navigate("/")}>click button</span> and enjoy other
        things
      </p>
      <button className="emptybtn" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};

export default Empty;
