import { useEffect, useState } from "react";

const Posts = () => {
  const posts = [
    {
      title: "first post",
      description: "this is first post",
      Content:
        "hey there thifmdsfm;ldglglfgldgmldfjgmkjgklgnkrlnrtlkngtrlkntrlknrktnrtklbntrljgnb",
    },
    {
      title: "second post",
      description: "this is second post",
      Content:
        "hey there thifmdsfm;fskdfdjsfdskbfskjdbf fkjdfhdskjhfbdskj kjdbfksdbfkjds",
    },
    {
      title: "third post",
      description: "this is third post",
      Content:
        "hey there thifmdsfm;fskdfdjsfdskbfskjdbf fkjdfhdskjhfbdskj kjdbfksdbfkjds",
    },
    {
      title: "fourth post",
      description: "this is fourth post",
      Content:
        "hey there thifmdsfm;fskdfdjsfdskbfskjdbf fkjdfhdskjhfbdskj kjdbfksdbfkjds",
    },
  ];
  const getCountUpto = (last) => {
    const count = [];
    for (let i = 1; i <= last; i++) {
      count.push(i);
    }
    return count;
  };
  const totalpages = posts.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  useEffect(() => {
    // code to dfetch from api
    const start = (currentPage - 1) * 1;
    const end = currentPage * 1;
    setCurrentPosts(posts.slice(start, end));
    // setCurrentPosts([posts[0]]);
  }, [currentPage]);
  return (
    <>
      <ul>
        {currentPosts.map((currentPost) => {
          return (
            <li>
              <b>{currentPost.title}: </b> {currentPost.description} <br />
              <em>{currentPost.Content}</em>
            </li>
          );
        })}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {getCountUpto(totalpages).map((count) => (
            <button onClick={() => setCurrentPage(count)}> {count}</button>
          ))}
        </div>
      </ul>
    </>
  );
};
export default Posts;
