import React, { useState } from "react";
import "./Create_Post.css";

import { Select, Flex, Input, Typography } from "antd";
const Create_Post = () => {
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
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
              <Select
                className="select-option"
                mode="multiple"
                placeholder="Choose a community"
                value={selectedItems}
                onChange={setSelectedItems}
                options={filteredOptions.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </div>
            <div className="create-post-header-container">
              <div className="create-post-header-data">
                <div className="hkhklhlk">
                  <img
                    src="https://ps.w.org/wp-create-multiple-posts-pages/assets/icon-128x128.png?rev=1865509"
                    alt="post image"
                    width={18}
                  />
                  <p>Post</p>
                </div>
                <div className="hkhklhlk">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/multimedia-line-30px/30/image_photo-512.png"
                    alt="post image"
                    width={18}
                  />
                  <p>Image & Video</p>
                </div>
                <div className="hkhklhlk">
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
                  <Input
                    className="inp-title"
                    count={{
                      show: true,
                      max: 3000,
                    }}
                    placeholder="Title"
                  />
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </main>
  );
};

export default Create_Post;
