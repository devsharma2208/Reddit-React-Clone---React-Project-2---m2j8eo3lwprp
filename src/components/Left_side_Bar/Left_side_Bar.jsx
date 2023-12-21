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
  const [gameShow, setGameShow] = useState(false);
  const [sportsShow, setSportsShow] = useState(false);
  const [businessShow, setBusinessShow] = useState(false);
  const [cryptoShow, setCryptoShow] = useState(false);
  const [tvShow, setTVShow] = useState(false);
  const [celebrityShow, setCelebrityShow] = useState(false);
  return (
    <section className="main-container">
      <div className="leftSide_bar" id="leftSideBar_id">
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
              <div
                className="leftBar-iconsand-topics"
                onClick={() => {
                  setGameShow((old) => !old);
                }}
              >
                <div className="left-name-icons">
                  <FontAwesomeIcon
                    className="icons-left-side"
                    icon={faVrCardboard}
                  />
                  <p>Gaming</p>
                </div>
                <div className="arroow-icons">
                  {!gameShow ? (
                    <FontAwesomeIcon icon={faAngleDown} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleUp} />
                  )}
                </div>
              </div>
              {gameShow && (
                <div className="left-side-bar">
                  <div className="left-side1">
                    <p>Valheim</p>
                    <p>Genshim</p>
                    <p>Minecraft</p>
                    <p>Pokimane</p>
                    <p>Halo Infinite</p>
                    <p>Call of Duty: Warzone</p>
                    <p>Path of Exile</p>
                    <p>Hollow Knight: Siksong</p>
                    <p>Escape from Tarkov</p>
                    <p>Watch Dogs: Legion</p>
                  </div>
                </div>
              )}

              <div
                className="leftBar-iconsand-topics"
                onClick={() => {
                  setSportsShow((old) => !old);
                }}
              >
                <div className="left-name-icons">
                  <FontAwesomeIcon
                    className="icons-left-side"
                    icon={faBaseball}
                  />
                  <p>Sports</p>
                </div>
                <div className="arroow-icons">
                  {sportsShow ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </div>
              </div>
              {sportsShow && (
                <div className="left-side-bar">
                  <div className="left-side1">
                    <p>NFL</p>
                    <p>NBA</p>
                    <p>Megan Anderson</p>
                    <p>Atlanta Hawks</p>
                    <p>Los Angeles Lakers</p>
                    <p>Boston Celtics</p>
                    <p>Arsenal F.C.</p>
                    <p>Philadelphia 76ers</p>
                    <p>Premier League</p>
                    <p>UFC</p>
                  </div>
                </div>
              )}
              <div
                className="leftBar-iconsand-topics"
                onClick={() => {
                  setBusinessShow((old) => !old);
                }}
              >
                <div className="left-name-icons">
                  <FontAwesomeIcon
                    className="icons-left-side"
                    icon={faMoneyBillTrendUp}
                  />
                  <p>Business</p>
                </div>
                <div className="arroow-icons">
                  {businessShow ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </div>
              </div>
              {businessShow && (
                <div className="left-side-bar">
                  <div className="left-side1">
                    <p>GameStop</p>
                    <p>Morderna</p>
                    <p>Pfizer</p>
                    <p>Johnson & Johnson</p>
                    <p>Astrazeneca</p>
                    <p>Walgreens</p>
                    <p>Best Buy</p>
                    <p>Novavax</p>
                    <p>SpaceX</p>
                    <p>Tesla</p>
                  </div>
                </div>
              )}
              <div
                className="leftBar-iconsand-topics"
                onClick={() => {
                  setCryptoShow((old) => !old);
                }}
              >
                <div className="left-name-icons">
                  <FontAwesomeIcon className="icons-left-side" icon={faGg} />
                  <p>Crpto</p>
                </div>
                <div className="arroow-icons">
                  {cryptoShow ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </div>
              </div>
              {cryptoShow && (
                <div className="left-side-bar">
                  <div className="left-side1">
                    <p>Cardano</p>
                    <p>Dogecoin</p>
                    <p>Algorand</p>
                    <p>Bitcoin</p>
                    <p>Litecoin</p>
                    <p>Basic Attention Token</p>
                    <p>Bitcoin</p>
                  </div>
                </div>
              )}
              <div
                className="leftBar-iconsand-topics"
                onClick={() => {
                  setTVShow((old) => !old);
                }}
              >
                <div className="left-name-icons">
                  <FontAwesomeIcon className="icons-left-side" icon={faTv} />
                  <p>Television</p>
                </div>
                <div className="arroow-icons">
                  {tvShow ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </div>
              </div>
              {tvShow && (
                <div className="left-side-bar">
                  <div className="left-side1">
                    <p>The Real Housewives of Atlanta</p>
                    <p>The Bachelor</p>
                    <p>Sister Wives</p>
                    <p>The Amazing Race Australia</p>
                    <p>Married at First Sight</p>
                    <p>The Real Housewives of Dalias</p>
                    <p>My 600-lb Life</p>
                    <p>Last Week Tonight with John Oilver</p>
                    <p>90 Day Fiance</p>
                    <p>Wife Swap</p>
                  </div>
                </div>
              )}
              <div
                className="leftBar-iconsand-topics"
                onClick={() => {
                  setCelebrityShow((old) => !old);
                }}
              >
                <div className="left-name-icons">
                  <FontAwesomeIcon
                    className="icons-left-side"
                    icon={faStarOfDavid}
                  />
                  <p>Celebrity</p>
                </div>
                <div className="arroow-icons">
                  {celebrityShow ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </div>
              </div>
              {celebrityShow && (
                <div className="left-side-bar">
                  <div className="left-side1">
                    <p>Kim Kardashian</p>
                    <p>Doja Cat</p>
                    <p>Iggy Azalea</p>
                    <p>Anya Taylor-Joy</p>
                    <p>Jamie Lee Curtis</p>
                    <p>Natalie Portman</p>
                    <p>Henry Cavill</p>
                    <p>Millile Bobby Brown</p>
                    <p>Tom Hiddeston</p>
                    <p>Keanu Reeves</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="right-side-bar"></div>
    </section>
  );
};

export default Left_side_Bar;
