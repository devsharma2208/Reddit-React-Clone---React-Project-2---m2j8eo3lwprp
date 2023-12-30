import React, { useEffect, useState } from "react";
import "./Right_side_bar.css";
import Fetch_Data from "./Fetched_data";
import Crousal from "../Crousal/Crousal";
import axios from "axios";

const Right_side_bar = () => {
  const [popularPostData, setPopularPostData] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const config = {
    headers: {
      projectID: "7k1ct68pbbmr",
    },
  };
  const popularPost_Fetch = async () => {
    try {
      const res = await axios.get(
        "https://academics.newtonschool.co/api/v1/reddit/channel",
        config
      );
      // console.log(res);
      setPopularPostData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    popularPost_Fetch();
  }, []);
  return (
    <section className="right_side_bar_container">
      {!userData && (
        <div className="right_Side-crousal">
          <Crousal />
        </div>
      )}
      <div className="right_side_content">
        <div className="right_right_all_content">
          <Fetch_Data />
        </div>
        {!userData ? (
          <div className="right_side_popular_community" id="popular-com-fix">
            <div className="right-sird-content-fixed">
              <p>POPULAR COMMUNITIES</p>
              <div className="fixed-right-content-text-container">
                {popularPostData.length > 0 &&
                  popularPostData.map((item, index) => (
                    <div className="fixed-right-content-text" key={index}>
                      <img
                        src={item.owner.profileImage}
                        alt="men"
                        style={{ width: "2rem", borderRadius: "50%" }}
                      />
                      <div className="single-user-content">
                        <div>r/{item.name}</div>
                        <p>5,847,896 members</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
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
            <div>
              <div className="bg-img-right"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Right_side_bar;
