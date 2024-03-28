import React from "react";
import Banana from "../../loading_logo/banana.jpeg";
const Banana_Empty = () => {
  return (
    <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
      <img style={{ width: "70%", height: "90vh" }} src={Banana} alt="" />
    </div>
  );
};

export default Banana_Empty;
