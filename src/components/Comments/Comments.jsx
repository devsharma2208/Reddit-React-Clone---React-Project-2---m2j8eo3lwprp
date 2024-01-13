import {
  faAngleDown,
  faDownLong,
  faEllipsis,
  faImage,
  faShare,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import ReactQuill from "react-quill";
import React, { useEffect, useState } from "react";
import "./Comments.css";
import { useNavigate } from "react-router-dom";
import {
  faBell,
  faBookmark,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { Button } from "@mui/material";
const Comments = () => {
  const navigate = useNavigate();
  const [singlePostDataValue, setSinglePostData] = useState("");
  const userImage = JSON.parse(sessionStorage.getItem("userImage"));
  const [commentData, setCommentData] = useState("");
  const [commentBtn, setCommentBtn] = useState(true);
  const userToken = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails")).token
    : "";
  const [comment, setComment] = useState("");
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "link",
    "list",
    "bullet",
  ];
  const likePost_config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
      projectID: "7k1ct68pbbmr",
    },
  };
  const singlePostConfig = {
    headers: {
      projectID: "7k1ct68pbbmr",
    },
  };
  const singlePostData = async () => {
    try {
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/post/${userImage.postId}`,
        singlePostConfig
      );
      console.log(res.data.data);
      setSinglePostData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getComments = async (userImage) => {
    // console.log(postId);
    try {
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/post/${userImage.postId}/comments`,

        likePost_config
      );
      console.log(res.data.data);
      setCommentData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    singlePostData();
    getComments(userImage);
  }, []);
  const handleReactQuillValue = (content) => {
    setComment(content);
    setCommentBtn(false);
  };
  return (
    <>
      {singlePostDataValue && (
        <section className="comm-container">
          <header className="nav-bar">
            <div className="content">
              <div className="arrow-img">
                <span className="spn">|</span>
                <FontAwesomeIcon icon={faUpLong} />
                <p>{singlePostDataValue && singlePostDataValue.likeCount}</p>
                <FontAwesomeIcon icon={faDownLong} />{" "}
                <span className="spn">|</span>
              </div>
              <div className="con-hfd">
                <FontAwesomeIcon icon={faImage} />
                <p>Try to be as much brutal as possible!!</p>
                <span>Ask</span>
              </div>
            </div>
            <div className="clo-comm" onClick={() => navigate("/")}>
              <span className="clo-x">X</span> <span>close</span>
            </div>
          </header>
          <main className="main-content-comm">
            <div className="uoiipo">
              <div>
                <div>
                  <FontAwesomeIcon icon={faUpLong} />
                </div>
                <div>{singlePostDataValue.likeCount}</div>
                <div>
                  <FontAwesomeIcon icon={faDownLong} />
                </div>
              </div>
              <div>
                <div className="con-bell-icon">
                  <div className="lakesdeep-icn">
                    <img
                      src={singlePostDataValue.channel.image}
                      alt=""
                      width={30}
                    />
                    <h5> r/Lakshadweep_Islands</h5>
                    <p>
                      Posted by <span>u/{singlePostDataValue.author.name}</span>{" "}
                      8 hours ago
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faBell} />
                  </div>
                </div>
                <div className="conn-comment">
                  <h3>{singlePostDataValue.content}</h3>
                </div>
                <div className="dicss">
                  <span>Discussion</span>
                </div>
                <div className="image-single-post">
                  <img src={userImage.imageUrl} alt="" />
                </div>
                <div className="commene-share-oth">
                  <div className="comm-dfadasf">
                    <FontAwesomeIcon icon={faMessage} />
                    <span>Comment</span>
                  </div>
                  <div className="shar-comment-oth">
                    <FontAwesomeIcon icon={faShare} />
                    <span>Share</span>
                  </div>
                  <div className="shar-comment-oth">
                    <FontAwesomeIcon icon={faBookmark} />
                    <span>Save</span>
                  </div>
                  <div className="shar-comment-oth">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                </div>

                <div className="quill-container">
                  <ReactQuill
                    className="react-quill-data"
                    value={comment}
                    onChange={handleReactQuillValue}
                    formats={formats}
                  />
                </div>
                <div className="comment-btn">
                  <Button
                    variant="contained"
                    disabled={commentBtn}
                    onClick={() => console.log(comment)}
                  >
                    Comment
                  </Button>
                </div>
                <div className="comments-formate-container">
                  {commentData &&
                    commentData.map((comment) => {
                      return (
                        <div>
                          <p>{comment.content}</p>
                          <span>{comment.createdAt.split("T")[0]}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="all-da">
              <div>
                <img
                  src="https://media.audleytravel.com/-/media/images/home/indian-subcontinent/india/places/istock_44978654_india_goa_beach_letterbox.jpg?q=79&w=1920&h=640"
                  className="imgdata"
                />
              </div>
              <div className="na-da-ta-ca">
                <img
                  className="ch-img"
                  src={singlePostDataValue.channel.image}
                  alt="channel Image"
                />
                <h4>/r_{singlePostDataValue.channel.name}</h4>
              </div>
              <div className="con-comm">
                <p>{singlePostDataValue.content}</p>
              </div>
              <div className="under-line"></div>
              <div className="btn-com">
                <button>Join</button>
              </div>
              <div className="under-line"></div>
              <div className="com-op-ic-con">
                <p>COMMUNITY OPTIONS</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </main>
        </section>
      )}
    </>
  );
};

export default Comments;
