import axios from "axios";
import React, { useEffect, useState } from "react";
import _debounce from "lodash/debounce";
import {
  faArrowUpFromBracket,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Fetch_Data = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div className="fetched-data-main-containt-container">
      {data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="fetched-main-contiant">
            <div>
              <div className="userName-image-container">
                <img
                  src={item.author.profileImage}
                  alt="author Image"
                  style={{ width: "3rem", borderRadius: "50%" }}
                />
                <h5>{item.channel.name}</h5>
              </div>
              <h4 className="main-containt">{item.content}</h4>
              <img
                src={item.channel.image}
                width={650}
                style={{ borderRadius: "1.2rem" }}
                alt="channel Image"
              />
              <div className="right-content-comntes">
                <div className="right-content-comntes-likes">
                  <div>
                    <svg
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
                <div className="right-content-comntes comments">
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
                <div className="share-btn">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      {isFetching && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Fetch_Data;
