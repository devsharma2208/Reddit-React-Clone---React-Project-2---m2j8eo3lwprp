import React from "react";
import "./Right_side_bar.css";
import Fetch_Data from "./Fetched_data";

const Right_side_bar = () => {
  return (
    <section className="right_side_bar_container">
      <div className="right_Side-crousal">crousal</div>
      <div className="right_side_content">
        <div className="right_right_all_content">
          <Fetch_Data />
        </div>
        <div className="right_side_popular_community">
          <div className="right-sird-content-fixed">
            <p>POPULAR COMMUNITIES</p>
            <div className="fixed-right-content-text-container">
              <div className="fixed-right-content-text">
                <img
                  src="https://styles.redditmedia.com/t5_2s30g/styles/communityIcon_wpxjh8fuvcw51.png"
                  alt="men"
                  style={{ width: "2rem", borderRadius: "50%" }}
                />
                <div className="single-user-content">
                  <div>r/AskMen</div>
                  <p>5,847,896 members</p>
                </div>
              </div>
              <div className="fixed-right-content-text">
                <img
                  src="https://styles.redditmedia.com/t5_2rrlp/styles/communityIcon_06pablpo0le21.png"
                  alt="men"
                  style={{ width: "2rem", borderRadius: "50%" }}
                />
                <div className="single-user-content">
                  <div>r/PS4</div>
                  <p>5,592,433 members</p>
                </div>
              </div>
              <div className="fixed-right-content-text">
                <img
                  src="https://styles.redditmedia.com/t5_2qh1f/styles/communityIcon_26udmxwqbrwb1.png"
                  alt="men"
                  style={{ width: "2rem", borderRadius: "50%" }}
                />
                <div className="single-user-content">
                  <div>r/apple</div>
                  <p>4,560,127 members</p>
                </div>
              </div>
              <div className="fixed-right-content-text">
                <img
                  src="https://styles.redditmedia.com/t5_2s84e/styles/communityIcon_g8xlzjxvilbb1.jpg?format=pjpg&s=904e57327bdb1e8dad5b23a60fbe9344e48719a6"
                  alt="men"
                  style={{ width: "2rem", borderRadius: "50%" }}
                />
                <div className="single-user-content">
                  <div>r/NBA2k</div>
                  <p>528,784 members</p>
                </div>
              </div>
              <div className="fixed-right-content-text">
                <img
                  src="https://styles.redditmedia.com/t5_2xbci/styles/communityIcon_32btum6062v91.png"
                  alt="men"
                  style={{ width: "2rem", borderRadius: "50%" }}
                />
                <div className="single-user-content">
                  <div>r/xboxone</div>
                  <p>4,008,881 members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Right_side_bar;
