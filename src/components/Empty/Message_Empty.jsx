import React from "react";
import Message from "../../loading_logo/chat.jpeg";
const Message_Empty = () => {
  return (
    <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
      <img style={{ width: "70%", height: "90vh" }} src={Message} alt="" />
    </div>
  );
};

export default Message_Empty;
