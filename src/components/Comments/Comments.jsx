import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";

const Comments = () => {
  const userImage = JSON.parse(sessionStorage.getItem("userImage"));
  const userToken = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails")).token
    : "";
  const likePost_config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
      projectID: "7k1ct68pbbmr",
    },
  };
  const getComments = async (userImage) => {
    // console.log(postId);
    try {
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/post/${userImage.postId}/comments`,

        likePost_config
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getComments(userImage);
  }, []);
  return (
    <section>
      <header>
        <div>
          <div>
            <FontAwesomeIcon icon={faUpLong} />
            <p>like</p>
            <FontAwesomeIcon icon={faDownLong} />
          </div>
          <div></div>
        </div>
        <div> x Close</div>
      </header>
    </section>
  );
};

export default Comments;
