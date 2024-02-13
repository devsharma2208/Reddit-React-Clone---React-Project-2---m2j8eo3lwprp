import React, { useEffect, useState } from "react";
import axios from "axios";
import _debounce from "lodash/debounce";
import {
  faArrowUpFromBracket,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Fetch_Data = ({ userData, setLognIn }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [like, setLike] = useState("");
  const [likeIndex, setLikeIndex] = useState(-1);
  const userToken = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails")).token
    : "";
  const navigate = useNavigate();
  const config = {
    headers: {
      projectID: "7k1ct68pbbmr",
    },
  };

  const fetchData = async () => {
    if (isFetching) {
      return;
    }

    try {
      setIsFetching(true);
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/post?limit=10&page=${page}`,
        config
      );
      console.log(res.data.data);
      setData((prevData) => [...prevData, ...res.data.data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again.");
    } finally {
      setIsFetching(false);
    }
  };

  const handleScroll = _debounce(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      fetchData();
    }
  }, 200); // Adjust the debounce delay as needed

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Fetch data initially
  useEffect(() => {
    fetchData();
  }, []);

  const likePost_config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
      projectID: "7k1ct68pbbmr",
    },
  };
  const handleLike = async (postId, index) => {
    // console.log(postId);
    // setIndex(index);
    try {
      const res = await axios.post(
        `https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,
        {},
        likePost_config
      );

      setLikeIndex(index);
      // setLikeDislike(false);
      // console.log(res);
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleDislike = async (postId) => {
    console.log(postId);
    try {
      const res = await axios.delete(
        `https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,

        likePost_config
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={`fetched-data-main-containt-container ${
        userData && "fetched-data-afterlogin"
      }`}
    >
      {data.length > 0 &&
        data.map((item, index) => (
          <div
            key={index}
            className={`fetched-main-contiant ${
              userData && "right-right-all_content_after_login"
            }`}
          >
            {userData && (
              <div className="right-content-comntes-after-login">
                <div className="right-content-comntes-likes-after-login">
                  <div
                    onClick={() => {
                      handleLike(item._id, index);
                    }}
                  >
                    <svg
                      className={`like-post-after-login ${
                        likeIndex === index && "likedPost"
                      }`}
                      rpl=""
                      fill="currentColor"
                      height="16"
                      icon-name="upvote-outline"
                      viewBox="0 0 20 20"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        className="adfklj"
                        d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"
                      ></path>
                    </svg>
                  </div>
                  <p>
                    {likeIndex === index ? item.likeCount + 1 : item.likeCount}
                  </p>
                  <div onClick={() => handleDislike(item._id, index)}>
                    <svg
                      className="disLike-after-login"
                      rpl=""
                      fill="currentColor"
                      height="16"
                      icon-name="downvote-outline"
                      viewBox="0 0 20 20"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>{" "}
                    </svg>
                  </div>
                </div>
              </div>
            )}
            <div className="user-alldata">
              <div className="userName-image-container">
                <img
                  className="author-img after-login-author"
                  src={item.author.profileImage}
                  alt="author Image"
                />
                <div>
                  <h5>{item.channel.name}</h5>
                  <h6>{item.author.name}</h6>
                </div>
              </div>
              <h4 className="main-containt main-content-afterlogin">
                {item.content}
              </h4>
              <div className="imageMainContainer after-login-img">
                <img
                  src={item.images[0]}
                  style={{ borderRadius: "1.2rem" }}
                  alt="channel Image"
                />
              </div>
              {!userData ? (
                <div className="right-content-comntes">
                  <div className="right-content-comntes-likes">
                    <div>
                      <svg
                        onClick={() => setLognIn(true)}
                        className="like-post"
                        rpl=""
                        fill="currentColor"
                        height="16"
                        icon-name="upvote-outline"
                        viewBox="0 0 20 20"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>
                      </svg>
                    </div>
                    <p>{item.likeCount}</p>
                    <div>
                      <svg
                        onClick={() => setLognIn(true)}
                        className="disLike"
                        rpl=""
                        fill="currentColor"
                        height="16"
                        icon-name="downvote-outline"
                        viewBox="0 0 20 20"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>{" "}
                      </svg>
                    </div>
                  </div>
                  <div
                    className="right-content-comntes comments"
                    onClick={() => setLognIn(true)}
                  >
                    <svg
                      className="comments-icon"
                      rpl=""
                      aria-hidden="true"
                      class="icon-comment"
                      fill="currentColor"
                      height="20"
                      icon-name="comment-outline"
                      viewBox="0 0 20 20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>{" "}
                    </svg>
                    <p>{item.commentCount}k</p>
                  </div>
                  <div className="share-btn" onClick={() => setLognIn(true)}>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    <p>Share</p>
                  </div>
                </div>
              ) : (
                <div className="comments-after-login">
                  <div
                    onClick={() => {
                      navigate(`/comments/:${item.author.name}`);
                      sessionStorage.setItem(
                        "userImage",
                        JSON.stringify({
                          imageUrl: item.images[0],
                          postId: item._id,
                        })
                      );
                    }}
                  >
                    <img
                      src="https://cdn.icon-icons.com/icons2/1524/PNG/512/comment_106501.png"
                      alt="comment icon"
                      width={22}
                    />
                    <p>Comments</p>
                  </div>
                  <div>
                    <img
                      src="https://w7.pngwing.com/pngs/569/949/png-transparent-computer-icons-share-icon-symbol-right-arrow-miscellaneous-angle-text.png"
                      alt="share icon"
                      width={22}
                    />
                    <p>Share</p>
                  </div>
                  <div className="savegfhgfhgf">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-save-3244517-2701888.png?f=webp"
                      alt="save icon"
                      width={22}
                    />
                    <p>Save</p>
                  </div>
                  <div className="three-dots">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      {isFetching && (
        <div style={{ textAlign: "center" }}>
          <img
            src="data:image/jpeg;base64,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"
            alt="Loading Icon"
            width={70}
          />
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Fetch_Data;
