import React, { useEffect, useRef, useState } from "react";
import "./Create_Post.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "100%",
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  maxWidth: "100%",
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
const Create_Post = () => {
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const [mediaType, setMediaType] = useState(null);
  const userToken = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails")).token
    : "";
  const user = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : "";

  // useEffect(() => {
  //   createPostAPI();
  // }, []);

  const top100Films = [{ label: user.name, year: 1994 }];
  const [post, setPost] = useState("");

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
  const convertDataUrlToBlob = (dataUrl) => {
    const [, base64] = dataUrl.split(",");
    const binaryString = atob(base64);
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
    const blobZaid = new Blob([uint8Array], { type: mediaType });
    console.log("isBlob:", blobZaid instanceof Blob);
    return blobZaid; // use mediaType here to set the correct MIME type
  };

  const [files, setFiles] = useState([]);
  const [imageData, setImageData] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);

      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        setImageData(e.target.result);
      };
      reader.readAsDataURL(file);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", post);
  if (imageData) {
    const mediaBlob = convertDataUrlToBlob(imageData);
    console.log(mediaBlob instanceof Blob);
    formData.append("images", mediaBlob, "image_filename.jpg");
  }

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
      projectID: "7k1ct68pbbmr",
    },
  };

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  const createPostAPI = async () => {
    console.log(formData);
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/reddit/post/",
        formData,
        config
      );

      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handlePostData = () => {
    console.log(imageData);
    createPostAPI();
    console.log({ ...formData });
  };
  return (
    <main className="create-post-container">
      <div className="div-container-create">
        <div>
          <h3 className="create-post-text">Create a post</h3>
        </div>
        <div className="grid-create-post">
          <div className="create-left-container">
            <div className="draft-comments">
              <span>
                DRAFTS <span>0</span>
              </span>
            </div>
            <div className="slectOption">
              <Autocomplete
                className="select-option"
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Choose a community" />
                )}
              />
            </div>
            <div className="create-post-header-container">
              <div className="create-post-header-data">
                <div className="hkhklhlk" onClick={() => setToggle(false)}>
                  <img
                    src="https://ps.w.org/wp-create-multiple-posts-pages/assets/icon-128x128.png?rev=1865509"
                    alt="post image"
                    width={18}
                  />
                  <p>Post</p>
                </div>
                <div className="hkhklhlk" onClick={() => setToggle(true)}>
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/multimedia-line-30px/30/image_photo-512.png"
                    alt="post image"
                    width={18}
                  />
                  <p>Image & Video</p>
                </div>
                <div className="hklhlhfs">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/56/Chain_link_icon_slanted.png"
                    alt="post image"
                    width={18}
                  />
                  <p>Link</p>
                </div>
                <div className="hklhlhfs">
                  <img
                    src="https://static.thenounproject.com/png/2696208-200.png"
                    alt="post image"
                    width={18}
                  />
                  <p>Poll</p>
                </div>
              </div>

              <div>
                <div className="input-title-con">
                  <TextField
                    className="input-textfield"
                    size="small"
                    name="Size"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    count={{
                      show: true,
                      max: 3000,
                    }}
                  />
                </div>
                {!toggle ? (
                  <div className="quill-container">
                    {" "}
                    <ReactQuill
                      className="react-quill-data hgsh"
                      value={post}
                      theme="snow"
                      onChange={(content, delta, source, editor) => {
                        const text = editor.getText().trim();
                        setPost(text);
                      }}
                      formats={formats}
                    />
                  </div>
                ) : (
                  <>
                    <div className="drop-image">
                      <section className="container">
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          <p className="textuploadImg">
                            Drag and drop some files here, or{" "}
                            <span className="uploadFile">Upload file</span>
                          </p>
                        </div>
                        <aside style={thumbsContainer}>{thumbs}</aside>
                      </section>
                    </div>
                  </>
                )}
              </div>

              <div className="bo-da-ta">
                <div>
                  <FontAwesomeIcon icon={faPlus} />
                  <h4>OC</h4>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPlus} />
                  <h4>Spoiler</h4>
                </div>
                <div className="nsfw">
                  <FontAwesomeIcon icon={faPlus} />
                  <h4>NSFW</h4>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPlus} />
                  <h4>Flair</h4>
                </div>
              </div>
              <div className="hr"></div>
              <div className="btn-comment">
                <div>{post}</div>
                <button>Save Draft</button>
                <button onClick={handlePostData}>Post</button>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  defaultChecked
                />
                <label htmlFor="checkbox">
                  Send me post reply notifications
                </label>
              </div>
              <div className="last-con">
                <p>Connect accounts to share your post</p>
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
            </div>
          </div>
          <div>
            <div className="right-side-create-comments">
              <div className="comment-icon-text">
                <img
                  src="https://i.redd.it/snoovatar/avatars/5b73c029-506b-49a5-aab1-a2dc61ca62f8.png"
                  alt="reddit image"
                  width={50}
                />
                <p>Posting to Reddit</p>
              </div>
              <ol className="list-container">
                <li>Remember the human</li>
                <li>Behave like you would in real life</li>
                <li>Look for the original source of content</li>
                <li>Search for duplicates before posting</li>
                <li>Read the community’s rules</li>
              </ol>
            </div>
            <div className="last-post">
              <p>
                Please be mindful of reddit's <span> content policy</span>
              </p>
              <p>
                and practice good <span> reddiquette.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Create_Post;
