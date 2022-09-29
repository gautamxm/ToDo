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
    const postRawData = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postData = await postRawData.json()
    console.log('bro ', postData)
    setCurrentPostData(postData)
  }
  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (currentPost !== -1) {
        fetchCurrentPost(currentPost)
    }
  }, [currentPost])
  const data = (post) => {
    console.log(post)
    setCurrentPost(post.id)
  };
  if (currentPost === -1) {
    return (
        <>
          {users.map((post) => {
            return (
              <p>
                <button onClick={() => data(post)}>{post.title}</button>
              </p>
            );
          })}
        </>
      );
  }console.log(currentPostData)
  return <>{currentPostData.title} - {currentPostData.body} <button onClick={() => setCurrentPost(-1)}>cick here to go back</button></>
  
};

export default Apidata;
