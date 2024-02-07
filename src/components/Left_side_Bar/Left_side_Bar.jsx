import React, { useState } from "react";
import "./Left_side_Bar.css";
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
import Right_side_bar from "../Right_side_bar/Right_side_bar";

const Left_side_Bar = ({ setLognIn }) => {
  const [topicsshow, setTopicsShow] = useState(true);
  const [gameShow, setGameShow] = useState(false);
  const [sportsShow, setSportsShow] = useState(false);
  const [businessShow, setBusinessShow] = useState(false);
  const [cryptoShow, setCryptoShow] = useState(false);
  const [tvShow, setTVShow] = useState(false);
  const [celebrityShow, setCelebrityShow] = useState(false);
  const [resoures, setResoures] = useState(true);
  const [popularPost, setPopularPost] = useState(true);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  return (
    <section
      className={`main-container ${userData && "after-login-main-container"}`}
    >
      <aside
        className={`leftSide_bar ${userData && "left-side-after-login"}`}
        id="leftSideBar_id"
      >
        {!userData && (
          <>
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
              <div className="topic-bottom-line">
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
                        <FontAwesomeIcon
                          className="icons-left-side"
                          icon={faGg}
                        />
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
                        <FontAwesomeIcon
                          className="icons-left-side"
                          icon={faTv}
                        />
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
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-animals-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.64 10.204a1.508 1.508 0 0 1-.827 1.66 1.497 1.497 0 0 1-2.08-.926 1.508 1.508 0 0 1-.033-.734c.018-.096.045-.19.08-.28.04-.091.087-.178.14-.261a1.03 1.03 0 0 1 .19-.221 1.546 1.546 0 0 1 2.12 0c.07.064.131.138.18.22.057.082.104.17.14.261.04.09.07.185.09.281ZM5.54 9.021c-.096.019-.19.05-.28.09a1.299 1.299 0 0 0-.26.14 1.506 1.506 0 0 0-.641 1.544c.021.097.051.191.092.281.032.094.08.182.14.261.164.246.397.438.67.552.09.04.183.07.28.09a1.476 1.476 0 0 0 1.35-.411c.068-.072.132-.15.19-.23.052-.084.099-.171.14-.261.037-.09.064-.185.08-.281a1.506 1.506 0 0 0-1.034-1.73 1.526 1.526 0 0 0-.726-.045Zm3.315 4.074h2.291v-1.253H8.855v1.253Zm11.125-2.497c.008.13.02.259.02.39v.189a.637.637 0 0 1-.018.116 7.323 7.323 0 0 1-2.967 5.41 11.344 11.344 0 0 1-7.014 2.296 11.343 11.343 0 0 1-7.015-2.296 7.316 7.316 0 0 1-2.967-5.415.588.588 0 0 1-.018-.111v-.188c0-.127.011-.254.019-.38a.543.543 0 0 1-.02-.101V2.62a1.106 1.106 0 0 1 .548-.956 1.173 1.173 0 0 1 1.153-.022l3.947 2.141a12.38 12.38 0 0 1 8.705 0L18.3 1.641a1.171 1.171 0 0 1 1.155.023A1.102 1.102 0 0 1 20 2.62v7.88a.546.546 0 0 1-.02.098Zm-1.24.558.008-.128v-.032a5.751 5.751 0 0 0-1.7-3.995l-.433-.452.9-.868.431.454c.292.305.56.634.8.982v-4.34l-4.057 2.25a.618.618 0 0 1-.654-.045.645.645 0 0 1-.1-.018c-2.538-.96-5.339-.96-7.877 0a.72.72 0 0 1-.091.016.62.62 0 0 1-.66.047L1.252 2.82v4.293c.24-.348.508-.676.8-.982l.43-.454.9.868-.432.452a5.751 5.751 0 0 0-1.7 3.995v.04l.008.108v.007a6.072 6.072 0 0 0 2.5 4.57A10.093 10.093 0 0 0 10 17.744a10.093 10.093 0 0 0 6.242-2.028 6.054 6.054 0 0 0 2.497-4.561Z"></path>
                      </svg>
                      <p>Animals and Pets</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-anime-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.913 4.266v-2.9h-1.25v2.875c-.524.013-1.046.062-1.563.146l-.738-2.7-1.2.33.723 2.646c-.495.14-.978.316-1.448.525L3.9 2.88l-1.041.693 1.457 2.192a9.916 9.916 0 0 0-1.393 1L1.067 4.91l-.884.883 1.858 1.86A7.838 7.838 0 0 0 0 12.852v.624h1.25v-.625a7.023 7.023 0 0 1 3.368-5.8 2.98 2.98 0 0 0 .6 2.77A10.038 10.038 0 0 0 5 11.852c0 3.928 2.243 7.125 5 7.125s5-3.2 5-7.125a8.155 8.155 0 0 0-2.343-6.026c3.529.951 6.093 3.74 6.093 7.026v.625H20v-.625c0-4.49-4-8.186-9.087-8.586ZM10.58 9.88a2.725 2.725 0 0 1 .714 1.973c0 1.312-.682 2.226-1.294 2.226s-1.294-.914-1.294-2.226c.004-.361.04-.722.106-1.078l.009-.037a3.14 3.14 0 0 0 1.349-1.085c.153.04.294.119.41.227ZM5.75 7.852a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Zm8 4c0 3.24-1.683 5.875-3.75 5.875s-3.75-2.636-3.75-5.875c.002-.39.03-.778.082-1.164a3.1 3.1 0 0 0 1.186.278c-.037.294-.058.59-.062.886 0 1.95 1.117 3.476 2.544 3.476s2.544-1.527 2.544-3.476a3.937 3.937 0 0 0-1.123-2.9 2.229 2.229 0 0 0-.746-.438 3.046 3.046 0 0 0-.558-2.53c2.013.1 3.633 2.69 3.633 5.868Z"></path>
                      </svg>
                      <p>Anime</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-art-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.9 8.782.558 5.442a.625.625 0 0 1 0-.884l4-4a.625.625 0 0 1 .884 0L9.354 4.47l-.988.78L5 1.884 1.884 5l3 3-.984.782Zm15.544 5.776-3.93-3.928-.783.985L18.116 15 15 18.116l-3.03-3.03-.784.984 3.372 3.372a.625.625 0 0 0 .884 0l4-4a.623.623 0 0 0 0-.884h.002ZM18.634 4.5 9.011 16.593a4.108 4.108 0 0 1-.51.66 4.472 4.472 0 0 1-3.147 1.373 10.731 10.731 0 0 0-3.572.718.871.871 0 0 1-1.128-1.125c.442-1.141.685-2.35.72-3.573A4.473 4.473 0 0 1 2.746 11.5c.11-.096.226-.187.346-.272a.622.622 0 0 1 .143-.169l12.255-9.687A2.236 2.236 0 0 1 18.633 4.5Zm-10.26 9.9A2.88 2.88 0 0 0 5.6 11.626h-.092c-.71.005-1.39.284-1.9.78a3.217 3.217 0 0 0-.984 2.261 11.738 11.738 0 0 1-.542 3.251 11.801 11.801 0 0 1 3.253-.54A3.214 3.214 0 0 0 7.6 16.39a2.746 2.746 0 0 0 .773-1.99Zm9.184-11.958a.989.989 0 0 0-1.3-.084L6.046 10.431a4.11 4.11 0 0 1 3.516 3.463l8.086-10.162a.984.984 0 0 0-.09-1.29Z"></path>
                      </svg>
                      <p>Art</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-cars-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.071 2.929A10 10 0 0 0 2.93 17.07 10 10 0 0 0 17.071 2.929Zm-.884 13.258A8.75 8.75 0 0 1 3.813 3.813a8.75 8.75 0 0 1 12.374 12.374Zm-.1-8.733-3.08 1.028a3.356 3.356 0 0 0-6.016.005l-3.1-1.033-.39 1.185 3.148 1.05c-.01.1-.032.2-.032.31a3.384 3.384 0 0 0 2.758 3.32v3.3h1.25v-3.3a3.383 3.383 0 0 0 2.757-3.32c0-.107-.022-.21-.032-.315l3.135-1.045-.398-1.185ZM10 12.132a2.132 2.132 0 1 1 0-4.264 2.132 2.132 0 0 1 0 4.264Z"></path>
                      </svg>
                      <p>Cars and Motor Vehicles</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-craftsdiy-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.95 6.984v-1.87A1.121 1.121 0 0 0 15.825 4h-2.7A1.121 1.121 0 0 0 12 5.114V7H8V2.325h1.125v-1.25h-8A1.127 1.127 0 0 0 0 2.2v5.3h.025A.589.589 0 0 0 0 7.625v7.75A.625.625 0 0 0 .625 16h1.426a3.487 3.487 0 0 0 6.886.125h3.076A2.995 2.995 0 0 0 18 16h1.325a.625.625 0 0 0 .625-.625V10.49a3.584 3.584 0 0 0-3-3.505ZM6.75 2.325V7h-5.5V2.325h5.5ZM5.5 17.75a2.25 2.25 0 1 1 2.151-2.875H5.625v1.25h2.026A2.247 2.247 0 0 1 5.5 17.75Zm9.5 0a1.75 1.75 0 1 1 0-3.499 1.75 1.75 0 0 1 0 3.5Zm3.7-3h-.981a2.99 2.99 0 0 0-5.5.125H8.937a3.494 3.494 0 0 0-6.852-.125H1.25v-6.5h10.875a1.17 1.17 0 0 0 1.125-1.182V5.25h2.45v2.307a.625.625 0 0 0 .625.625A2.344 2.344 0 0 1 18.7 10.49v4.261Z"></path>
                      </svg>
                      <p>Crafts and DIY</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-culture-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.625 6.25c.237-.003.473-.04.7-.107-.212.465-.323.97-.325 1.482v.625h1.25v-.625a2.357 2.357 0 0 1 .7-1.679 2.416 2.416 0 0 1 3.381.022l1.517 1.367.837-.929-1.497-1.344a3.714 3.714 0 0 0-4.052-.713 2.59 2.59 0 0 0 .114-.724A2.625 2.625 0 1 0 3.625 6.25Zm0-4a1.375 1.375 0 1 1 0 2.75 1.375 1.375 0 0 1 0-2.75Zm10.43 3.7a2.36 2.36 0 0 1 .512 2.601 2.385 2.385 0 0 1-.53.778l-1.367 1.516.929.837 1.343-1.493a3.6 3.6 0 0 0 .739-4.045c.227.068.463.104.7.107a2.625 2.625 0 1 0-2.631-2.626c.003.237.04.473.107.7A3.611 3.611 0 0 0 12.375 4h-.625v1.25h.625a2.363 2.363 0 0 1 1.68.696v.004Zm2.32-3.7a1.375 1.375 0 1 1 0 2.75 1.375 1.375 0 0 1 0-2.75Zm0 11.5c-.237.003-.473.04-.7.107.212-.465.323-.97.325-1.482v-.625h-1.25v.625a2.356 2.356 0 0 1-.7 1.679 2.416 2.416 0 0 1-3.381-.022l-1.513-1.367-.837.929 1.493 1.344a3.6 3.6 0 0 0 4.045.737 2.578 2.578 0 0 0-.107.7 2.625 2.625 0 1 0 2.625-2.625Zm0 4a1.375 1.375 0 1 1 0-2.75 1.375 1.375 0 0 1 0 2.75Zm-10.43-3.7a2.36 2.36 0 0 1-.512-2.601c.123-.292.303-.557.53-.778l1.372-1.515-.929-.837-1.344 1.493a3.6 3.6 0 0 0-.738 4.045 2.562 2.562 0 0 0-.7-.107 2.625 2.625 0 1 0 2.626 2.625 2.564 2.564 0 0 0-.107-.7c.465.212.97.323 1.482.325h.625v-1.25h-.625a2.364 2.364 0 0 1-1.68-.696v-.004Zm-2.32 3.7a1.375 1.375 0 1 1 0-2.75 1.375 1.375 0 0 1 0 2.75Z"></path>
                      </svg>
                      <p>Culture, Race, and Ethnicity</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-ethics-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.375 1H18.25V0H17v1h-1.375a.625.625 0 0 0-.625.625V3H5V1.625A.625.625 0 0 0 4.375 1H3.25V0H2v1H.625A.625.625 0 0 0 0 1.625v16.75A.625.625 0 0 0 .625 19H2v1h1.25v-1h1.125A.625.625 0 0 0 5 18.375V17h10v1.375a.624.624 0 0 0 .625.625H17v1h1.25v-1h1.125a.624.624 0 0 0 .625-.625V1.625A.625.625 0 0 0 19.375 1ZM3.75 17.75h-2.5V2.25h2.5v15.5Zm1.25-2V4.25h10v11.5H5Zm13.75 2h-2.5V2.25h2.5v15.5ZM7.782 7.025h4.436v1.25H7.782v-1.25Zm0 4h4.436v1.25H7.782v-1.25Z"></path>
                      </svg>
                      <p>Ethics and philosophy</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-fashion-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.81 18H2.19A2.142 2.142 0 0 1 .1 16.512a2.031 2.031 0 0 1 .8-2.3L7.6 9.47l.722 1.02-6.7 4.743a.782.782 0 0 0-.325.9.9.9 0 0 0 .9.617H17.81a.9.9 0 0 0 .9-.617.784.784 0 0 0-.324-.9l-7.5-5.315a13.932 13.932 0 0 1-2.347-2.1 4.859 4.859 0 0 1-1.246-3.225A2.654 2.654 0 0 1 10 2a2.654 2.654 0 0 1 2.707 2.592v.625h-1.25v-.625A1.4 1.4 0 0 0 10 3.25a1.4 1.4 0 0 0-1.457 1.342 3.6 3.6 0 0 0 .925 2.394c.635.717 1.35 1.36 2.132 1.914l7.505 5.315a2.032 2.032 0 0 1 .794 2.3A2.141 2.141 0 0 1 17.809 18Z"></path>
                      </svg>
                      <p>Fashion</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-food-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.75.376H9V5a3.624 3.624 0 0 1-3 3.563v11.063H4.75V8.563A3.624 3.624 0 0 1 1.75 5V.376H3V5a2.375 2.375 0 1 0 4.75 0V.376ZM6 .376H4.75v5.25H6V.376Zm11.375 0A5.511 5.511 0 0 0 12 6v4a3.629 3.629 0 0 0 2.308 3.416l.586.217.435-1.172-.586-.217A2.373 2.373 0 0 1 13.25 10V6a4.309 4.309 0 0 1 3.5-4.324v17.95H18V1a.625.625 0 0 0-.625-.624Z"></path>
                      </svg>
                      <p>Food and Drink</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-history-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.625 19H2.375v-1.25h15.25V19ZM17 4.684V3.625h-1.25v1.059a4.6 4.6 0 0 1-2.8 4.215l-1.062.442a.626.626 0 0 0 0 1.155l1.055.438a4.609 4.609 0 0 1 2.81 4.219v1.222H17v-1.222a5.853 5.853 0 0 0-3.28-5.235A5.85 5.85 0 0 0 17 4.684Zm-7 9.253 2.475 2.438h1.783l-3.82-3.761a.625.625 0 0 0-.876 0l-3.8 3.761h1.763L10 13.937ZM3 3.625v1.059a5.85 5.85 0 0 0 3.28 5.234A5.852 5.852 0 0 0 3 15.153v1.222h1.25v-1.222a4.6 4.6 0 0 1 2.8-4.215l1.065-.438a.626.626 0 0 0 0-1.155L7.06 8.9a4.609 4.609 0 0 1-2.81-4.216V3.625H3ZM17.625 1H2.375v1.25h15.25V1Z"></path>
                      </svg>
                      <p>History</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-hobbies-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.95 6.984v-1.87A1.121 1.121 0 0 0 15.825 4h-2.7A1.121 1.121 0 0 0 12 5.114V7H8V2.325h1.125v-1.25h-8A1.127 1.127 0 0 0 0 2.2v5.3h.025A.589.589 0 0 0 0 7.625v7.75A.625.625 0 0 0 .625 16h1.426a3.487 3.487 0 0 0 6.886.125h3.076A2.995 2.995 0 0 0 18 16h1.325a.625.625 0 0 0 .625-.625V10.49a3.584 3.584 0 0 0-3-3.505ZM6.75 2.325V7h-5.5V2.325h5.5ZM5.5 17.75a2.25 2.25 0 1 1 2.151-2.875H5.625v1.25h2.026A2.247 2.247 0 0 1 5.5 17.75Zm9.5 0a1.75 1.75 0 1 1 0-3.499 1.75 1.75 0 0 1 0 3.5Zm3.7-3h-.981a2.99 2.99 0 0 0-5.5.125H8.937a3.494 3.494 0 0 0-6.852-.125H1.25v-6.5h10.875a1.17 1.17 0 0 0 1.125-1.182V5.25h2.45v2.307a.625.625 0 0 0 .625.625A2.344 2.344 0 0 1 18.7 10.49v4.261Z"></path>
                      </svg>
                      <p>Hobbies</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-law-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.3 8.625 3.621 5.31l1.324 3.315h1.346L4.256 3.53a1.37 1.37 0 0 1 1.362-1.28h8.764a1.37 1.37 0 0 1 1.362 1.28l-2.035 5.1h1.346l1.324-3.32L17.7 8.625h1.346l-2.061-5.16A2.62 2.62 0 0 0 14.382 1H5.618a2.62 2.62 0 0 0-2.606 2.465L.951 8.625H2.3Z"></path>
                        <path d="M6.617 10H.625a.625.625 0 0 0-.625.625 3.62 3.62 0 1 0 7.242 0A.625.625 0 0 0 6.617 10Zm-3 3a2.376 2.376 0 0 1-2.288-1.75h4.58A2.376 2.376 0 0 1 3.621 13h-.004Z"></path>
                        <path d="M19.375 10h-5.992a.624.624 0 0 0-.625.625 3.622 3.622 0 0 0 6.966 1.386c.182-.44.276-.91.276-1.386a.624.624 0 0 0-.625-.625Zm-3 3a2.376 2.376 0 0 1-2.288-1.75h4.576A2.375 2.375 0 0 1 16.379 13h-.004Z"></path>
                        <path d="M10.625 5h-1.25v12.7H6.479v1.25h7.042V17.7h-2.896V5Z"></path>
                      </svg>
                      <p>Law</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-learning-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.492 11.153h-.625V9.9h.625a1.348 1.348 0 1 0-1.345-1.344v.625H7.9v-.625a2.6 2.6 0 1 1 2.6 2.6l-.008-.003Zm-2.33 6.6H4.25V14.43a.626.626 0 0 0-.35-.561l-1.565-.77.9-4.346a.608.608 0 0 0 .013-.127 7.25 7.25 0 1 1 7.242 7.153h-.623v1.25h.625A8.513 8.513 0 1 0 2 8.56l-.987 4.757a.625.625 0 0 0 .336.688L3 14.819v3.556a.625.625 0 0 0 .625.625h4.537v-1.247ZM14.42 5.51a.627.627 0 0 0 0-.884 5.55 5.55 0 0 0-7.853 0l-.44.443.884.883.441-.442a4.3 4.3 0 0 1 5.611-.41L11.58 6.583l.884.884L14.42 5.51Zm0 6.862a5.522 5.522 0 0 0 1.625-3.93V7.82h-1.25v.625a4.3 4.3 0 0 1-8.6 0v-.625H4.941v.625a5.551 5.551 0 0 0 9.478 3.929Z"></path>
                      </svg>
                      <p>Learning and Education</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-military-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.386.88a1.162 1.162 0 0 0-1.213.088L10 6.107 2.827.967a1.164 1.164 0 0 0-1.662.326c-.108.176-.165.38-.165.587v11a.626.626 0 0 0 .261.508l8.061 5.775a1.169 1.169 0 0 0 1.357 0l8.06-5.775a.626.626 0 0 0 .261-.512v-11a1.118 1.118 0 0 0-.614-.996Zm-.636 11.677-7.7 5.586-7.8-5.588V8.21l7.392 5.178a.626.626 0 0 0 .738-.015l5.73-4.38L15.352 8l-5.368 4.1L2.25 6.684V2.092l7.386 5.292a.625.625 0 0 0 .728 0l7.386-5.346v10.519Z"></path>
                      </svg>
                      <p>Military</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-movies-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.375 8H6.45L17.3 5.093a.625.625 0 0 0 .44-.765L16.709.464a.62.62 0 0 0-.522-.459.616.616 0 0 0-.244.017L.488 4.162a.624.624 0 0 0-.441.766l.969 3.618A.527.527 0 0 0 1 8.625v8.75A2.629 2.629 0 0 0 3.625 20h12.75A2.628 2.628 0 0 0 19 17.375v-8.75A.625.625 0 0 0 18.375 8ZM8.06 6.275l-2.75.737v-2.7a.61.61 0 0 0-.028-.135l2.778-.744v2.842Zm1.25-3.182 2.75-.737V5.2l-2.75.737V3.093Zm7.063.954-3.063.82V2.022l2.35-.63.713 2.656ZM4.06 4.5v2.807c0 .013.006.025.007.038l-1.94.52-.712-2.657L4.06 4.5ZM17.75 17.375a1.377 1.377 0 0 1-1.375 1.375H3.625a1.377 1.377 0 0 1-1.375-1.375V9.25h15.5v8.125Z"></path>
                      </svg>
                      <p>Movies</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-music-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.741 10.094h-.124A1.587 1.587 0 0 0 3 11.645v4.708a1.582 1.582 0 0 0 1.617 1.541h.124a2.543 2.543 0 0 0 2.609-2.467v-2.866a2.544 2.544 0 0 0-2.609-2.467ZM6.1 15.427a1.3 1.3 0 0 1-1.359 1.217h-.124a.336.336 0 0 1-.367-.291v-4.708a.344.344 0 0 1 .367-.3h.124A1.3 1.3 0 0 1 6.1 12.561v2.866ZM0 10.941h1.25v5.874H0v-5.874Zm17.75-.841v-.623A7.51 7.51 0 0 0 10 2.25a7.511 7.511 0 0 0-7.75 7.227v.623H1v-.623A8.76 8.76 0 0 1 10 1a8.76 8.76 0 0 1 9 8.477v.623h-1.25Zm-2.367-.008h-.124a2.544 2.544 0 0 0-2.609 2.467v2.866a2.543 2.543 0 0 0 2.609 2.467h.124A1.582 1.582 0 0 0 17 16.353v-4.708a1.587 1.587 0 0 0-1.617-1.551v-.002Zm.367 6.259a.336.336 0 0 1-.367.291h-.124a1.3 1.3 0 0 1-1.359-1.215v-2.866a1.3 1.3 0 0 1 1.359-1.217h.124a.344.344 0 0 1 .367.3v4.707Zm4.25-5.41v5.874h-1.25v-5.874H20Z"></path>
                      </svg>
                      <p>Music</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-places-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m10.05 20-.465-.262C8.808 19.181 2 14.129 2 8.391A8.212 8.212 0 0 1 10 0a8.212 8.212 0 0 1 8 8.391c0 5.738-6.808 10.79-7.584 11.347L10.05 20ZM10 1.242a6.966 6.966 0 0 0-6.75 7.149c0 4.632 5.36 9.039 6.75 10.1 1.39-1.064 6.75-5.472 6.75-10.1A6.966 6.966 0 0 0 10 1.242Zm0 10.682a3.975 3.975 0 1 1 4-3.975 3.992 3.992 0 0 1-4 3.975Zm0-6.707a2.733 2.733 0 1 0 2.75 2.732A2.743 2.743 0 0 0 10 5.217Z"></path>
                      </svg>
                      <p>Place</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-podcasts-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m17.032 17.133-.936-.833.417-.466a8.751 8.751 0 1 0-13.042 0l.425.466-.932.834-.417-.466a10 10 0 1 1 14.906 0l-.421.465Zm-1.294-3.3a7.168 7.168 0 0 0 1.258-3.811 6.742 6.742 0 0 0-6.773-7.023 7.29 7.29 0 0 0-7.227 6.979 6.817 6.817 0 0 0 1 3.827l.328.532 1.072-.655-.33-.532a5.572 5.572 0 0 1-.816-3.128 6.028 6.028 0 0 1 5.973-5.773 5.487 5.487 0 0 1 5.527 5.729 5.92 5.92 0 0 1-1.043 3.146l-.354.515 1.031.708.354-.514Zm-2.742-3.788a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-1.25 0a1.75 1.75 0 1 1-3.5.01 1.75 1.75 0 0 1 3.5-.01Zm.533 8.886.691-3.368a1.277 1.277 0 0 0-.264-1.063 1.363 1.363 0 0 0-1.062-.5h-3.3a1.364 1.364 0 0 0-1.062.5 1.276 1.276 0 0 0-.264 1.065l.691 3.369A1.367 1.367 0 0 0 9.06 20h1.872a1.367 1.367 0 0 0 1.347-1.07Zm-.635-3.681.1.062-.69 3.367a.123.123 0 0 1-.123.07H9.06a.125.125 0 0 1-.123-.07l-.69-3.367.1-.062h3.297Z"></path>
                      </svg>
                      <p>Pocasts and Streamers</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-politics-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.608 3.921 10.537.134a1.141 1.141 0 0 0-1.074 0L2.39 3.921a1.089 1.089 0 0 0-.554 1.237A1.107 1.107 0 0 0 2.93 6h14.14A1.107 1.107 0 0 0 18.1 4.443a1.09 1.09 0 0 0-.493-.522Zm-14.117.83L10 1.264l6.509 3.485H3.49Zm11.884 10.174V8.25h-2.75v6.675h-1.25V8.25h-2.75v6.675h-1.25V8.25h-2.75v6.675h-1.25V8.25h-1.2V7h15.65v1.25h-1.2v6.675h-1.25Zm4.506 3.326-1.012.733-1.254-1.734H2.385L1.13 18.984.12 18.25l1.334-1.846a1.154 1.154 0 0 1 .86-.405h15.375a1.13 1.13 0 0 1 .8.33l1.393 1.92Z"></path>
                      </svg>
                      <p>Politics</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-programming-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.625 14.25h-9.25V13h9.25v1.25ZM4.71 7.33c.184-.187.288-.438.29-.7a1.046 1.046 0 0 0-.29-.71 1.047 1.047 0 0 0-1.42 0 1 1 0 0 0 1.42 1.41Zm4 0a1 1 0 0 0 0-1.41 1.047 1.047 0 0 0-1.42 0 1.046 1.046 0 0 0-.29.71 1 1 0 0 0 1.71.7Zm4 0a1.01 1.01 0 0 0 .29-.7 1.047 1.047 0 0 0-.29-.71 1.017 1.017 0 0 0-.91-.27 1.209 1.209 0 0 0-.18.05l-.18.09c-.052.04-.102.084-.15.13a1.047 1.047 0 0 0-.29.71c.002.262.106.513.29.7.048.046.098.09.15.13l.18.09a1.209 1.209 0 0 0 .38.07c.266 0 .52-.103.71-.29Zm4 0a1.01 1.01 0 0 0 .29-.7 1.047 1.047 0 0 0-.29-.71 1.047 1.047 0 0 0-1.42 0 1 1 0 0 0 1.42 1.41Zm-8.33 3.22a1.19 1.19 0 0 0 .33-.22c.184-.187.288-.438.29-.7a.88.88 0 0 0-.08-.39.988.988 0 0 0-.21-.32 1.047 1.047 0 0 0-1.42 0 1.046 1.046 0 0 0-.29.71.99.99 0 0 0 1 .99c.13.002.26-.022.38-.07Zm4.33-.22a1.01 1.01 0 0 0 .29-.7 1.047 1.047 0 0 0-.29-.71 1.047 1.047 0 0 0-1.42 0 1 1 0 0 0 .33 1.63c.12.048.25.072.38.07.266 0 .52-.103.71-.29Zm4 0a1 1 0 0 0 0-1.41 1.047 1.047 0 0 0-1.42 0 1.047 1.047 0 0 0-.29.71 1 1 0 0 0 1.71.7Zm-12 0c.184-.187.288-.438.29-.7a1.046 1.046 0 0 0-.29-.71 1.047 1.047 0 0 0-1.42 0 1.046 1.046 0 0 0-.29.71 1 1 0 0 0 1.71.7ZM20 15.375V3.125A1.127 1.127 0 0 0 18.875 2H1.125A1.127 1.127 0 0 0 0 3.125v12.25A2.63 2.63 0 0 0 2.625 18h14.75A2.63 2.63 0 0 0 20 15.375ZM18.75 3.25v12.125a1.377 1.377 0 0 1-1.375 1.375H2.625a1.377 1.377 0 0 1-1.375-1.375V3.25h17.5Z"></path>
                      </svg>
                      <p>Programming </p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-reading-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.375 2h-7.292A2.688 2.688 0 0 0 10 3a2.688 2.688 0 0 0-2.083-1H.625A.625.625 0 0 0 0 2.625v14.75A.625.625 0 0 0 .625 18h7.917v-1.25H1.25V3.25h6.667a1.465 1.465 0 0 1 1.458 1.469v11.093h1.25V4.719a1.465 1.465 0 0 1 1.458-1.469h6.667v13.5h-6.667a2.64 2.64 0 0 0-2.708 2.625V20h1.25v-.625A1.388 1.388 0 0 1 12.083 18h7.292a.624.624 0 0 0 .625-.625V2.625A.625.625 0 0 0 19.375 2Z"></path>
                      </svg>
                      <p>Reading,Writing,and Literature</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-religion-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.822 6.579c.06 0 .12.006.179.006a2.6 2.6 0 0 0 1.792-.709 2.633 2.633 0 0 0 .83-1.916A4.155 4.155 0 0 0 10.617.6a1.131 1.131 0 0 0-1.237 0 4.342 4.342 0 0 0-1.927 2.616 2.921 2.921 0 0 0 .514 2.341 2.515 2.515 0 0 0 1.856 1.022ZM8.675 3.48a3.122 3.122 0 0 1 1.324-1.79 2.9 2.9 0 0 1 1.375 2.27 1.375 1.375 0 0 1-1.475 1.372 1.28 1.28 0 0 1-.94-.527 1.65 1.65 0 0 1-.284-1.325ZM6.16 16.96c-.055 0-.108-.01-.162-.013V9.625A1.693 1.693 0 0 1 7.749 8h4.5a1.693 1.693 0 0 1 1.75 1.625v7.322c-.054 0-.107.013-.162.013h-1.088V9.625c0-.2-.23-.375-.5-.375h-4.5c-.271 0-.5.172-.5.375v7.335H6.16Zm13.009-.97-.206.59A5.2 5.2 0 0 1 14.017 20H5.98a5.2 5.2 0 0 1-4.947-3.42l-.206-.59 1.18-.411.206.59a3.95 3.95 0 0 0 3.767 2.58h8.036a3.95 3.95 0 0 0 3.767-2.58l.206-.59 1.18.412Z"></path>
                      </svg>
                      <p>Religion and Spirituality</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-science-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.757 18.392a2.555 2.555 0 0 1-2.345 1.522H3.587a2.555 2.555 0 0 1-2.345-1.523 2.628 2.628 0 0 1 .411-2.842l4.292-5.5L6 9.981V4.124h1.25V10.1a1.114 1.114 0 0 1-.332.732l-4.3 5.51a1.408 1.408 0 0 0-.237 1.529 1.3 1.3 0 0 0 1.207.79h12.825a1.3 1.3 0 0 0 1.208-.79 1.392 1.392 0 0 0-.215-1.5l-4.43-5.549a1.117 1.117 0 0 1-.276-.722V4.124h1.25V10.1l4.415 5.47a2.615 2.615 0 0 1 .392 2.822ZM13.974 1H6v1.25h7.974V1Z"></path>
                      </svg>
                      <p>Science</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-tabletop-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.26 14.44H6.812v-.09l.121-.163A9.414 9.414 0 0 0 8.738 9.6l-1.726.87A2.591 2.591 0 0 1 4 9.98l-.669-.673a1.135 1.135 0 0 1-.1-1.467l4.2-5.655H5.818V.935h2.61A7.606 7.606 0 0 1 16 8.56v5.88h-1.25V8.56a6.363 6.363 0 0 0-5.778-6.352L4.289 8.5l.594.6a1.344 1.344 0 0 0 1.566.256l1.934-.974a1.1 1.1 0 0 1 1.126.073A1.145 1.145 0 0 1 10 9.5a10.65 10.65 0 0 1-1.74 4.94ZM18 17.625A1.618 1.618 0 0 0 16.393 16H4.607A1.618 1.618 0 0 0 3 17.625v2.325h1.25v-2.325a.367.367 0 0 1 .357-.375h11.786a.367.367 0 0 1 .357.375v2.325H18v-2.325Z"></path>
                      </svg>
                      <p>Tabletop Games</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-technology-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.875 7h-3.75A1.127 1.127 0 0 0 7 8.125v3.75A1.127 1.127 0 0 0 8.125 13h3.75A1.127 1.127 0 0 0 13 11.875v-3.75A1.127 1.127 0 0 0 11.875 7Zm-.125 4.75h-3.5v-3.5h3.5v3.5Z"></path>
                        <path d="M19 7.625v-1.25h-2v-1.75A1.627 1.627 0 0 0 15.375 3h-1.75V1h-1.25v2h-1.75V1h-1.25v2h-1.75V1h-1.25v2h-1.75A1.627 1.627 0 0 0 3 4.625v1.75H1v1.25h2v1.75H1v1.25h2v1.75H1v1.25h2v1.75A1.627 1.627 0 0 0 4.625 17h1.75v2h1.25v-2h1.75v2h1.25v-2h1.75v2h1.25v-2h1.75A1.627 1.627 0 0 0 17 15.375v-1.75h2v-1.25h-2v-1.75h2v-1.25h-2v-1.75h2Zm-3.25 7.75a.375.375 0 0 1-.375.375H4.625a.375.375 0 0 1-.375-.375V4.625a.375.375 0 0 1 .375-.375h10.75a.375.375 0 0 1 .375.375v10.75Z"></path>
                      </svg>
                      <p>Technology</p>
                    </div>
                    <div className="left-name-icons">
                      <svg
                        rpl=""
                        fill="currentColor"
                        height="20"
                        icon-name="topic-travel-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m6.447 8.472-.309.372-.479.575L1.75 5.548a.626.626 0 0 1-.015-.87A3.268 3.268 0 0 1 5.16 3.9l3.867 1.59c-.292.323-.57.657-.857.984L4.711 5.068a1.976 1.976 0 0 0-1.565.106l3.301 3.298Zm.344 10.833a1.123 1.123 0 0 0 .815-.722 4.965 4.965 0 0 0-.129-3.446l2.123-1.75 5.328 5.323.442-.442a3.265 3.265 0 0 0 .747-3.425l-2.126-5.221a122.4 122.4 0 0 0 2.568-2.443 12.172 12.172 0 0 0 2.623-3.9A1.875 1.875 0 0 0 16.7.828l-.055.024a12.167 12.167 0 0 0-3.74 2.553l-.172.17c-1.7 1.7-3.339 3.5-4.873 5.343l-3 3.607a4.959 4.959 0 0 0-3.448-.13A1.128 1.128 0 0 0 1 14.255L5.746 19a1.122 1.122 0 0 0 1.045.305Zm-2.42-5.63a1.11 1.11 0 0 0 1.387-.27l3.067-3.688a76.94 76.94 0 0 1 4.8-5.257l.172-.17A10.9 10.9 0 0 1 17.148 2l.057-.024a.606.606 0 0 1 .686.127.614.614 0 0 1 .138.69 10.909 10.909 0 0 1-2.354 3.5c-.722.723-2.06 1.97-2.6 2.473a1.111 1.111 0 0 0-.274 1.245l2.15 5.279a2 2 0 0 1-.095 1.579L10.4 12.422a1.123 1.123 0 0 0-1.51-.072L6.6 14.24a1.113 1.113 0 0 0-.272 1.392c.31.742.366 1.566.161 2.344l-4.464-4.463a3.655 3.655 0 0 1 2.345.163Z"></path>
                      </svg>
                      <p>Travel</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="topic-bottom-line">
                <div
                  className="left-topics"
                  onClick={() => {
                    setResoures((old) => !old);
                  }}
                >
                  {" "}
                  <p>RESOURES</p>
                  {resoures ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </div>
                {resoures && (
                  <>
                    <div className="topic-bottom-line">
                      <div className="left-name-icons">
                        <svg
                          rpl=""
                          fill="currentColor"
                          height="20"
                          icon-name="admin-outline"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19.938 9.211a3.25 3.25 0 0 0-3.177-2.642c-.45 0-.895.102-1.3.3a10.812 10.812 0 0 0-4.838-1.379l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.13 1.13 0 0 0-1.333.862L9.343 5.5a10.77 10.77 0 0 0-4.791 1.357 3.214 3.214 0 0 0-1.315-.289A3.248 3.248 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.567l.006-.138.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.062-.81-.015-1.208Zm-1.221 1c-.075.42-.282.805-.59 1.1l-.392.407-.024.625c-.061 3-3.45 5.354-7.716 5.354-4.267 0-7.66-2.353-7.717-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.571-1.087a2.138 2.138 0 0 1 .012-.765 2 2 0 0 1 1.942-1.623c.353.003.698.102 1 .286l.337.216.334-.22a9.435 9.435 0 0 1 4.758-1.381h.719a9.427 9.427 0 0 1 4.726 1.4l.347.225.343-.232a1.7 1.7 0 0 1 .96-.3 2 2 0 0 1 1.949 1.629c.049.253.051.512.007.766v.004Z"></path>
                        </svg>
                        <p>About Reddit</p>
                      </div>
                      <div className="left-name-icons">
                        <svg
                          rpl=""
                          fill="currentColor"
                          height="20"
                          icon-name="topic-activism-outline"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.175 13.11c-.237.462-.428.6-.514.627l-.133-.035c-.439-.238-1.278-2.03-1.278-5.2 0-2.95.729-4.718 1.184-5.144l.245-.087c.095.042.276.192.5.62l.284.556 1.113-.57-.285-.556c-.541-1.057-1.17-1.3-1.618-1.316h-.044a1.4 1.4 0 0 0-.754.23L3.7 5.852c-.915-.552-1.847-.991-2.61-.58C.237 5.735.044 6.98 0 9c.047 2 .24 3.245 1.093 3.7.783.423 1.754-.06 2.7-.637.288.1.685.218 1.224.37v4.347a1.122 1.122 0 0 0 1.121 1.12h2.75a1.123 1.123 0 0 0 1.122-1.12v-3l4.028 1.075c.183.088.384.134.587.135.45 0 1.1-.23 1.661-1.32l.285-.555-1.113-.57-.283.566Zm-11.882-2.2c-1.247.782-1.546.734-1.607.7C1.6 11.56 1.3 11.229 1.25 9c.049-2.25.345-2.582.434-2.63.064-.033.361-.081 1.61.7a.624.624 0 0 0 .54.058l8.838-3.146A13.9 13.9 0 0 0 12 8.5c-.034 1.608.221 3.21.754 4.728L3.79 10.834a.622.622 0 0 0-.497.073v.004Zm2.97 5.753v-3.877c.678.184 1.507.405 2.5.67v3.2l-2.5.007ZM19.25 8v1.25H16V8h3.25Zm-3.477-2.674 2.82-1.594.615 1.088-2.819 1.594-.616-1.088Zm.616 5.26 2.819 1.594-.615 1.088-2.82-1.594.616-1.088Z"></path>
                        </svg>
                        <p>Advertise</p>
                      </div>
                      <div className="left-name-icons">
                        <svg
                          rpl=""
                          fill="currentColor"
                          height="20"
                          icon-name="help-outline"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 1.25Zm1.611 4.058a2.4 2.4 0 0 1 .994.861c.241.375.366.812.359 1.258a2.04 2.04 0 0 1-.167.854c-.1.229-.238.439-.407.622-.2.208-.413.404-.636.588-.223.188-.4.348-.533.483a1.754 1.754 0 0 0-.328.464 1.326 1.326 0 0 0-.13.591v.78H9.328v-.759a2.216 2.216 0 0 1 .601-1.572c.204-.21.421-.406.65-.588.209-.173.373-.316.492-.431a1.52 1.52 0 0 0 .3-.4 1.154 1.154 0 0 0-.058-1.128 1.192 1.192 0 0 0-.485-.421 1.525 1.525 0 0 0-.677-.151 1.545 1.545 0 0 0-.721.168 1.3 1.3 0 0 0-.713 1.131H7.256a2.628 2.628 0 0 1 1.381-2.293A3.132 3.132 0 0 1 10.175 5c.496-.008.987.097 1.436.308Zm-2.164 9.843a1.088 1.088 0 0 1-.386-.385 1.034 1.034 0 0 1-.144-.537c-.002-.186.048-.37.144-.53.094-.16.227-.293.386-.387a1.03 1.03 0 0 1 .53-.143 1.062 1.062 0 0 1 .926 1.597c-.096.159-.23.291-.389.385a1.034 1.034 0 0 1-.537.144 1.021 1.021 0 0 1-.53-.144Z"></path>
                        </svg>
                        <p>Help</p>
                      </div>
                      <div className="left-name-icons">
                        <svg
                          rpl=""
                          fill="currentColor"
                          height="20"
                          icon-name="topic-reading-outline"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19.375 2h-7.292A2.688 2.688 0 0 0 10 3a2.688 2.688 0 0 0-2.083-1H.625A.625.625 0 0 0 0 2.625v14.75A.625.625 0 0 0 .625 18h7.917v-1.25H1.25V3.25h6.667a1.465 1.465 0 0 1 1.458 1.469v11.093h1.25V4.719a1.465 1.465 0 0 1 1.458-1.469h6.667v13.5h-6.667a2.64 2.64 0 0 0-2.708 2.625V20h1.25v-.625A1.388 1.388 0 0 1 12.083 18h7.292a.624.624 0 0 0 .625-.625V2.625A.625.625 0 0 0 19.375 2Z"></path>
                        </svg>
                        <p>Blog</p>
                      </div>
                      <div className="left-name-icons">
                        <svg
                          rpl=""
                          fill="currentColor"
                          height="20"
                          icon-name="topic-careers-outline"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.784 12.331a7 7 0 0 0 1.165.6l-6.174 6.178a2.747 2.747 0 0 1-3.883-3.884l6.18-6.181c.162.409.362.8.6 1.171l-5.897 5.894a1.5 1.5 0 0 0 0 2.116 1.533 1.533 0 0 0 2.118 0l5.891-5.894Zm4.481-.309a5.7 5.7 0 0 0 4.671-3.953 5.372 5.372 0 0 0-.1-3.538 1.116 1.116 0 0 0-.813-.7 1.127 1.127 0 0 0-1.039.305L14.118 7A.807.807 0 0 1 13 7a.79.79 0 0 1 0-1.116l2.864-2.863a1.127 1.127 0 0 0 .3-1.04 1.112 1.112 0 0 0-.7-.812 5.363 5.363 0 0 0-3.539-.1 5.7 5.7 0 0 0-3.946 4.666 5.627 5.627 0 0 0 6.287 6.287Zm.58-9.75L12.117 5a2.043 2.043 0 0 0 0 2.884 2.088 2.088 0 0 0 2.883 0l2.727-2.726c.271.825.276 1.714.013 2.542a4.432 4.432 0 0 1-3.628 3.079A4.377 4.377 0 0 1 9.22 5.887a4.429 4.429 0 0 1 4.342-3.822c.437 0 .87.07 1.284.207Z"></path>
                        </svg>
                        <p>Careers</p>
                      </div>
                      <div className="left-name-icons">
                        <svg
                          rpl=""
                          fill="currentColor"
                          height="20"
                          icon-name="author-outline"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.128 0a4.78 4.78 0 0 0-4.774 4.774c.007.214.029.427.065.638l-.137-.138a1.143 1.143 0 0 0-1.719.126L.461 16.2a2.315 2.315 0 0 0 3.241 3.24l10.8-8.1a1.14 1.14 0 0 0 .122-1.718l-.138-.138c.212.036.426.058.64.065a4.773 4.773 0 1 0 0-9.547L15.128 0ZM2.955 18.445a1.07 1.07 0 0 1-1.5-1.5L9.487 6.239l4.175 4.176-10.707 8.03ZM15.128 8.3a3.53 3.53 0 1 1 0-7.06 3.53 3.53 0 0 1 0 7.06Zm-7.186 2.78L10.018 9l.88.88-2.077 2.08-.879-.88Z"></path>
                        </svg>
                        <p>Press</p>
                      </div>
                    </div>
                    <div className="topic-bottom-line">
                      <div>
                        <div className="left-name-icons">
                          <svg
                            rpl=""
                            fill="currentColor"
                            height="20"
                            icon-name="community-outline"
                            viewBox="0 0 20 20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.875 7.614a2.055 2.055 0 0 0-.974.222 1.62 1.62 0 0 0-.879 1.46v4.2H6.409V6.2h1.552v.93H8c.275-.32.616-.575 1-.748.453-.207.947-.31 1.445-.3.243-.003.487.02.725.071.158.03.31.084.451.161l-.649 1.559a1.731 1.731 0 0 0-.523-.2 2.755 2.755 0 0 0-.574-.059ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0a8.722 8.722 0 0 0-2.841-6.435l-4.974 11.986H9.581l5.3-12.809A8.748 8.748 0 1 0 18.75 10Z"></path>
                          </svg>
                          <p>Communities</p>
                        </div>
                        <div className="left-name-icons">
                          <svg
                            rpl=""
                            fill="currentColor"
                            height="20"
                            icon-name="topic-history-outline"
                            viewBox="0 0 20 20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.625 19H2.375v-1.25h15.25V19ZM17 4.684V3.625h-1.25v1.059a4.6 4.6 0 0 1-2.8 4.215l-1.062.442a.626.626 0 0 0 0 1.155l1.055.438a4.609 4.609 0 0 1 2.81 4.219v1.222H17v-1.222a5.853 5.853 0 0 0-3.28-5.235A5.85 5.85 0 0 0 17 4.684Zm-7 9.253 2.475 2.438h1.783l-3.82-3.761a.625.625 0 0 0-.876 0l-3.8 3.761h1.763L10 13.937ZM3 3.625v1.059a5.85 5.85 0 0 0 3.28 5.234A5.852 5.852 0 0 0 3 15.153v1.222h1.25v-1.222a4.6 4.6 0 0 1 2.8-4.215l1.065-.438a.626.626 0 0 0 0-1.155L7.06 8.9a4.609 4.609 0 0 1-2.81-4.216V3.625H3ZM17.625 1H2.375v1.25h15.25V1Z"></path>
                          </svg>
                          <p>Best of Reddit</p>
                        </div>
                        <div className="left-name-icons">
                          <svg
                            rpl=""
                            fill="currentColor"
                            height="20"
                            icon-name="topic-outline"
                            viewBox="0 0 20 20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m19.567 18.683-2.194-2.194a3.508 3.508 0 1 0-.884.885l2.194 2.193.884-.884ZM14.5 16.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM5.5 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM12.125 9h4.75A1.127 1.127 0 0 0 18 7.875v-4.75A1.127 1.127 0 0 0 16.875 2h-4.75A1.127 1.127 0 0 0 11 3.125v4.75A1.127 1.127 0 0 0 12.125 9Zm.125-5.75h4.5v4.5h-4.5v-4.5ZM7.875 11h-4.75A1.127 1.127 0 0 0 2 12.125v4.75A1.127 1.127 0 0 0 3.125 18h4.75A1.127 1.127 0 0 0 9 16.875v-4.75A1.127 1.127 0 0 0 7.875 11Zm-.125 5.75h-4.5v-4.5h4.5v4.5Z"></path>
                          </svg>
                          <p>Topics</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="left-name-icons">
                        <svg
                          rpl=""
                          fill="currentColor"
                          height="20"
                          icon-name="topic-ethics-outline"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19.375 1H18.25V0H17v1h-1.375a.625.625 0 0 0-.625.625V3H5V1.625A.625.625 0 0 0 4.375 1H3.25V0H2v1H.625A.625.625 0 0 0 0 1.625v16.75A.625.625 0 0 0 .625 19H2v1h1.25v-1h1.125A.625.625 0 0 0 5 18.375V17h10v1.375a.624.624 0 0 0 .625.625H17v1h1.25v-1h1.125a.624.624 0 0 0 .625-.625V1.625A.625.625 0 0 0 19.375 1ZM3.75 17.75h-2.5V2.25h2.5v15.5Zm1.25-2V4.25h10v11.5H5Zm13.75 2h-2.5V2.25h2.5v15.5ZM7.782 7.025h4.436v1.25H7.782v-1.25Zm0 4h4.436v1.25H7.782v-1.25Z"></path>
                        </svg>
                        <p>Content Policy</p>
                      </div>
                      <div className="left-name-icons">
                        <svg
                          rpl=""
                          fill="currentColor"
                          height="20"
                          icon-name="topic-law-outline"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.3 8.625 3.621 5.31l1.324 3.315h1.346L4.256 3.53a1.37 1.37 0 0 1 1.362-1.28h8.764a1.37 1.37 0 0 1 1.362 1.28l-2.035 5.1h1.346l1.324-3.32L17.7 8.625h1.346l-2.061-5.16A2.62 2.62 0 0 0 14.382 1H5.618a2.62 2.62 0 0 0-2.606 2.465L.951 8.625H2.3Z"></path>
                          <path d="M6.617 10H.625a.625.625 0 0 0-.625.625 3.62 3.62 0 1 0 7.242 0A.625.625 0 0 0 6.617 10Zm-3 3a2.376 2.376 0 0 1-2.288-1.75h4.58A2.376 2.376 0 0 1 3.621 13h-.004Z"></path>
                          <path d="M19.375 10h-5.992a.624.624 0 0 0-.625.625 3.622 3.622 0 0 0 6.966 1.386c.182-.44.276-.91.276-1.386a.624.624 0 0 0-.625-.625Zm-3 3a2.376 2.376 0 0 1-2.288-1.75h4.576A2.375 2.375 0 0 1 16.379 13h-.004Z"></path>
                          <path d="M10.625 5h-1.25v12.7H6.479v1.25h7.042V17.7h-2.896V5Z"></path>
                        </svg>
                        <p>Privacy Policy</p>
                      </div>
                      <div className="left-name-icons">
                        <svg
                          rpl=""
                          fill="currentColor"
                          height="20"
                          icon-name="rules-outline"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.35 7.333H5.733V6.77h.48V5.23a1.232 1.232 0 0 1-.47.111v-.507c.178.01.353-.05.487-.167h.7v2.1h.419l.003.566Zm-.767 1.92c.164 0 .258.082.258.23 0 .22-.115.276-.516.522-.7.422-.768.806-.768 1.185v.143h1.975v-.564H6.374c.039-.106.149-.236.483-.424.538-.29.659-.581.659-.878 0-.488-.3-.8-.916-.8a1.171 1.171 0 0 0-1.05.633l.479.345a.708.708 0 0 1 .554-.392Zm.536 4.66a.544.544 0 0 0 .383-.545c0-.438-.313-.7-.9-.7a1.435 1.435 0 0 0-1.01.4l.369.427a.824.824 0 0 1 .588-.26c.178 0 .275.081.275.211 0 .156-.1.253-.448.253h-.218v.482h.205c.356 0 .507.086.507.307 0 .162-.1.28-.383.28a.7.7 0 0 1-.566-.334L5.5 14.8a1.22 1.22 0 0 0 1.047.529c.626 0 1.036-.286 1.036-.826a.581.581 0 0 0-.464-.59Zm1.88-3.288h6v-1.25H9v1.25Zm0 4h6v-1.25H9v1.25Zm0-8h6v-1.25H9v1.25Zm9-5.014v17.271A1.123 1.123 0 0 1 16.876 20h-12.7a1.123 1.123 0 0 1-1.125-1.118V4.25h-.875A1.127 1.127 0 0 1 1.05 3.125v-1.5A1.627 1.627 0 0 1 2.675 0h13.7A1.62 1.62 0 0 1 18 1.611ZM2.3 3h.75V1.625a.375.375 0 0 0-.75 0V3Zm14.45-1.389a.369.369 0 0 0-.374-.361H4.252a1.6 1.6 0 0 1 .048.375V18.75h12.45V1.611Z"></path>
                        </svg>
                        <p>User Agreement</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div
                className="left-topics"
                onClick={() => {
                  setPopularPost((old) => !old);
                }}
              >
                {" "}
                <p>POPULAR POSTS</p>
                {popularPost ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </div>
              {popularPost && (
                <div className="popularPosts-left-side-bar">
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
              )}
            </div>
          </>
        )}
      </aside>
      <main
        className={userData ? "right-sige-bar-after-login" : "right-side-bar"}
      >
        <Right_side_bar setLognIn={setLognIn} />
      </main>
    </section>
  );
};

export default Left_side_Bar;
