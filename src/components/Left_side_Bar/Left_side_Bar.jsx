import { faGg } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faBaseball,
  faHouse,
  faMoneyBillTrendUp,
  faSquareArrowUpRight,
  faStarOfDavid,
  faTv,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Left_side_Bar.css";

const Left_side_Bar = () => {
  const [topicsshow, setTopicsShow] = useState(true);
  return (
    <section className="main-container">
      <div className="leftSide_bar">
        <div className="left-side-bar-top-content">
          <div className="left-name-icons">
            <FontAwesomeIcon className="icons-left-side" icon={faHouse} />
            <p>Home</p>
          </div>
          <div className="left-name-icons">
            <FontAwesomeIcon
              className="icons-left-side"
              icon={faSquareArrowUpRight}
            />
            <p>Popular</p>
          </div>
        </div>
        <div>
          <div
            className="left-topics"
            onClick={() => {
              setTopicsShow((old) => {
                return !old;
              });
            }}
          >
            <p>TOPICS</p>
            {topicsshow ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </div>
          {topicsshow && (
            <div>
              <div className="leftBar-iconsand-topics">
                <div className="left-name-icons">
                  <FontAwesomeIcon
                    className="icons-left-side"
                    icon={faVrCardboard}
                  />
                  <p>Gaming</p>
                </div>

                <div className="arroow-icons">
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
              <div className="leftBar-iconsand-topics">
                <div className="left-name-icons">
                  <FontAwesomeIcon
                    className="icons-left-side"
                    icon={faBaseball}
                  />
                  <p>Sports</p>
                </div>
                <div className="arroow-icons">
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
              <div className="leftBar-iconsand-topics">
                <div className="left-name-icons">
                  <FontAwesomeIcon
                    className="icons-left-side"
                    icon={faMoneyBillTrendUp}
                  />
                  <p>Business</p>
                </div>
                <div className="arroow-icons">
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
              <div className="leftBar-iconsand-topics">
                <div className="left-name-icons">
                  <FontAwesomeIcon className="icons-left-side" icon={faGg} />
                  <p>Crpto</p>
                </div>
                <div className="arroow-icons">
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
              <div className="leftBar-iconsand-topics">
                <div className="left-name-icons">
                  <FontAwesomeIcon className="icons-left-side" icon={faTv} />
                  <p>Television</p>
                </div>
                <div className="arroow-icons">
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
              <div className="leftBar-iconsand-topics">
                <div className="left-name-icons">
                  <FontAwesomeIcon
                    className="icons-left-side"
                    icon={faStarOfDavid}
                  />
                  <p>Celebrity</p>
                </div>
                <div className="arroow-icons">
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="right-side-bar"></div>
    </section>
  );
};

export default Left_side_Bar;
