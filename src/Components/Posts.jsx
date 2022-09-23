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
  ];
  const getCountUpto = (last) => {
    const count = [];
    for (let i = 1; i <= last; i++) {
      count.push(i);
    }
    return count;
  };
  const totalpages = posts.length / 1;
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
              <b>{currentPost.title}: </b> {currentPost.description}
            </li>
          );
        })}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {getCountUpto(totalpages).map((count) => count)}
        </div>
      </ul>
    </>
  );
};
export default Posts;
