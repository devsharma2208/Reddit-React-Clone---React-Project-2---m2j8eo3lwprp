import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentData = ({ comment, setCommentToggle }) => {
  const [commentUserData, setCommentUser] = useState();
  const logedinUser = JSON.parse(localStorage.getItem("userDetails"));
  const userToken = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails")).token
    : "";
  const likePost_config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
      projectID: "7k1ct68pbbmr",
    },
  };
  const commentUser = async () => {
    try {
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/user/${comment.author}`,
        likePost_config
      );
      console.log(res.data.data);
      setCommentUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteComment = async (id) => {
    try {
      const res = await axios.delete(
        `https://academics.newtonschool.co/api/v1/reddit/comment/${id}`,
        likePost_config
      );
      console.log(res);
      setCommentToggle(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    commentUser();
  }, []);
  return (
    <div>
      <div className="comment-authow">
        <img
          src="https://i.pinimg.com/originals/16/bd/52/16bd524cb65c552e1ccbb9548296d2fa.png"
          alt="icon"
          width={30}
        />

        <h4>{commentUserData && commentUserData.name}</h4>
      </div>
      <div className="comment-comm">
        <p>{comment.content}</p>
        <span>{comment.createdAt.split("T")[0]}</span>
        {logedinUser.id === comment.author && (
          <button onClick={() => deleteComment(comment._id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentData;
