import React, { useEffect, useState } from "react";

const Apidata = () => {
  const [users, setUsers] = useState([]);
  const [currentPost, setCurrentPost] = useState(-1);
  const [currentPostData, setCurrentPostData] = useState({});
  const getPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
    setUsers(await data.json());
  };
  const fetchCurrentPost = async (postId) => {
    const postRawData = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const postData = await postRawData.json();
    console.log("bro ", postData);
    setCurrentPostData(postData);
  };
  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (currentPost !== -1) {
      fetchCurrentPost(currentPost);
    }
  }, [currentPost]);
  const data = (post) => {
    console.log(post);
    setCurrentPost(post.id);
  };
  if (currentPost === -1) {
    return (
      <>
        <div id="container">
          {users.map((post) => {
            return (
              <div onClick={() => data(post)} id="list">
                <p>{post.title}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  console.log(currentPostData);
  return (
    <>
      <div id="title">
        <b>Title Is</b> <br /> {currentPostData.title}
      </div>
      <div id="data">
        <b>Body Contained</b> <br /> {currentPostData.body}
      </div>
      <div id="bbtn">
        <button id="backbtn" onClick={() => setCurrentPost(-1)}>
          GO BACKKK !
        </button>
      </div>
    </>
  );
};

export default Apidata;
