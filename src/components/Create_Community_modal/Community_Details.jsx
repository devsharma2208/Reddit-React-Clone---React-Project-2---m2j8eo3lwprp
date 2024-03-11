import React, { useEffect, useState } from "react";
import "./Community_modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faImage,
  faLink,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { faBookmark, faMessage } from "@fortawesome/free-regular-svg-icons";

const Community_Details = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id, name } = useParams();
  const config = {
    headers: {
      projectID: "7k1ct68pbbmr",
    },
  };
  // console.log(id, name);
  const communityDataFetch = async () => {
    try {
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/channel/${
          id.length > 1 && id
        }/posts`,
        config
      );
      console.log(res.data.data);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    communityDataFetch();
  }, []);
  const top = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div>
        <div className="communityColor"></div>
        <div className="communityDetails">
          <div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/48/48952.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <h2>{name}</h2>
            <h4>Social Post</h4>
          </div>
          <div>
            <button>Join</button>
          </div>
        </div>
        <div className="community-container">
          <div className="community-container-2">
            <div>
              <div className="create-post-icon">
                <div>
                  <img
                    className="hot-img"
                    src="https://i.redd.it/bpo63ls7pi4a1.png"
                    alt="reddit"
                  />
                </div>
                <div onClick={() => navigate("/submit")}>
                  <input type="text" placeholder="Create Post" />
                </div>
                <div>
                  <FontAwesomeIcon className="gallery-icons" icon={faImage} />
                  <FontAwesomeIcon className="gallery-icons" icon={faLink} />
                </div>
              </div>
              <div className="button-container cummunity-new-filterSection">
                <button
                  className="btn-img hot"
                  onClick={() => navigate("/empty")}
                >
                  <img
                    className="hot-img"
                    src="https://png.pngtree.com/png-clipart/20220921/ourmid/pngtree-fire-logo-png-image_6209600.png"
                    alt="fire-img"
                  />{" "}
                  HOT
                </button>
                <button className="btn-img" onClick={() => navigate("/empty")}>
                  <img
                    className="hot-img"
                    src="https://www.iconpacks.net/icons/1/free-settings-icon-778-thumb.png"
                    alt="setting-img"
                  />{" "}
                  NEW
                </button>
                <button className="btn-img" onClick={top}>
                  {" "}
                  <img
                    className="hot-img"
                    src="https://pngfre.com/wp-content/uploads/red-arrow-25-1-1024x1024.png"
                    alt="arrow-img"
                  />
                  TOP
                </button>

                <button className="btn-img" onClick={() => navigate("/empty")}>
                  {" "}
                  <img
                    className="hot-img"
                    src="https://static.vecteezy.com/system/resources/previews/018/842/682/original/3d-high-quality-guarantee-symbol-medal-button-with-checkmark-best-quality-of-product-and-service-icon-standard-quality-control-certification-3d-render-illustration-free-png.png"
                    alt="best"
                  />
                  BEST
                </button>
                <p className="three-dot-2" onClick={() => navigate("/empty")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </p>
              </div>
              {data.length > 0 ? (
                data.map((item, index) => {
                  return (
                    <div className="popularPostData" key={index}>
                      <div>
                        <img
                          src="data:image/jpeg;base64,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"
                          alt="raddit logo"
                        />
                        <h5> /r .</h5>
                        <p>
                          {item && item.createdAt} • Because you visited this
                          community before
                        </p>
                      </div>
                      <main>
                        <div>
                          <img src={item && item.images[0]} alt="posts" />
                          <p>
                            {item ? item.content : <p>No Content Available</p>}
                          </p>
                        </div>
                        <div>
                          <button
                            className="comment-btn-community"
                            onClick={() => {
                              navigate(`/comments/:${item.author}`);
                              sessionStorage.setItem(
                                "userImage",
                                JSON.stringify({
                                  imageUrl: item.images[0],
                                  postId: item._id,
                                })
                              );
                            }}
                          >
                            <FontAwesomeIcon icon={faMessage} />
                            Comment
                          </button>
                          <button>
                            <FontAwesomeIcon icon={faShare} />
                            Share
                          </button>
                          <button>
                            <FontAwesomeIcon icon={faBookmark} />
                            Save
                          </button>
                        </div>
                      </main>
                    </div>
                  );
                })
              ) : (
                <h1 className="noData">😌 No Post Available</h1>
              )}
            </div>
            <div className="right-side-community-create-post">
              <div>
                <h3>About Community</h3>
              </div>
              <div>
                <p>Post</p>
                <p>1 online</p>
              </div>
              <div>
                <button onClick={() => navigate("/submit")}>Create Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community_Details;
