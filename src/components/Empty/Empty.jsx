import React, { useContext } from "react";
import "./Empty.css";
import { useNavigate } from "react-router-dom";
import { context } from "../ContextApi/ContextProvider";
const Empty = () => {
  const { themeColor } = useContext(context);
  const navigate = useNavigate();
  return (
    <div className="empty_container" id={`${themeColor && "darkcolorcomm"}`}>
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
