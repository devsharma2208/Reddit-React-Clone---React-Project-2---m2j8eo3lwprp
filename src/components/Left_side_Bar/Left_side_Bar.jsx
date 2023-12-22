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
import Right_side_bar from "../Right_side_bar/Right_side_bar";

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
      <aside className="leftSide_bar" id="leftSideBar_id">
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
              <div className="left-name-icons">
                <p>Animals and Pets</p>
              </div>
              <div className="left-name-icons">
                <p>Anime</p>
              </div>
              <div className="left-name-icons">
                <p>Art</p>
              </div>
              <div className="left-name-icons">
                <p>Cars and Motor Vehicles</p>
              </div>
              <div className="left-name-icons">
                <p>Crafts and DIY</p>
              </div>
              <div className="left-name-icons">
                <p>Culture, Race, and Ethnicity</p>
              </div>
              <div className="left-name-icons">
                <p>Ethics and philosophy</p>
              </div>
              <div className="left-name-icons">
                <p>Fashion</p>
              </div>
              <div className="left-name-icons">
                <p>Food and Drink</p>
              </div>
              <div className="left-name-icons">
                <p>History</p>
              </div>
              <div className="left-name-icons">
                <p>Hobbies</p>
              </div>
              <div className="left-name-icons">
                <p>Law</p>
              </div>
              <div className="left-name-icons">
                <p>Learning and Education</p>
              </div>
              <div className="left-name-icons">
                <p>Military</p>
              </div>
              <div className="left-name-icons">
                <p>Movies</p>
              </div>
              <div className="left-name-icons">
                <p>Music</p>
              </div>
              <div className="left-name-icons">
                <p>Place</p>
              </div>
              <div className="left-name-icons">
                <p>Pocasts and Streamers</p>
              </div>
              <div className="left-name-icons">
                <p>Politics</p>
              </div>
              <div className="left-name-icons">
                <p>Programming </p>
              </div>
              <div className="left-name-icons">
                <p>Reading,Writing,and Literature</p>
              </div>
              <div className="left-name-icons">
                <p>Religion and Spirituality</p>
              </div>
              <div className="left-name-icons">
                <p>Science</p>
              </div>
              <div className="left-name-icons">
                <p>Tabletop Games</p>
              </div>
              <div className="left-name-icons">
                <p>Technology</p>
              </div>
              <div className="left-name-icons">
                <p>Travel</p>
              </div>
              <div
                className="left-topics"
                onClick={() => {
                  setTopicsShow((old) => {
                    return !old;
                  });
                }}
              >
                {" "}
                <p>RESOURES</p>
                {topicsshow ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </div>
              <div className="left-name-icons">
                <p>About Reddit</p>
              </div>
              <div className="left-name-icons">
                <p>Advertise</p>
              </div>
              <div className="left-name-icons">
                <p>Help</p>
              </div>
              <div className="left-name-icons">
                <p>Blog</p>
              </div>
              <div className="left-name-icons">
                <p>Careers</p>
              </div>
              <div className="left-name-icons">
                <p>Press</p>
              </div>
            </div>
          )}
          <div>
            <div className="left-name-icons">
              <p>Communities</p>
            </div>
            <div className="left-name-icons">
              <p>Best of Reddit</p>
            </div>
            <div className="left-name-icons">
              <p>Topics</p>
            </div>
          </div>
          <div>
            <div className="left-name-icons">
              <p>Content Policy</p>
            </div>
            <div className="left-name-icons">
              <p>Privacy Policy</p>
            </div>
            <div className="left-name-icons">
              <p>User Agreement</p>
            </div>
          </div>
          <div
            className="left-topics"
            onClick={() => {
              setTopicsShow((old) => {
                return !old;
              });
            }}
          >
            {" "}
            <p>POPULAR POSTS</p>
            {topicsshow ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </div>
          <div>
            <p>English / Global</p>
          </div>
          <div>
            <p>Deutsch</p>
          </div>
          <div>
            <p>Espanol</p>
          </div>
          <div>
            <p>Francais</p>
          </div>
          <div>
            <p>Italiano</p>
          </div>
          <div>
            <p>Portugues</p>
          </div>
        </div>
      </aside>
      <main className="right-side-bar">
        <Right_side_bar />
      </main>
    </section>
  );
};

export default Left_side_Bar;
