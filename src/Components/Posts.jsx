import { useEffect, useState } from "react";

const Posts = () => {
  const getCountUpto = (last) => {
    const count = [];
    for (let i = 1; i <= last; i++) {
      count.push(i);
    }
    return count;
  };
  const [totalpages, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUSersList, setCurrentUserList] = useState([]);
  const getUsersFromApi = async (pageNum) => {
    return fetch(`https://reqres.in/api/users?page=${pageNum}`);
  };
  useEffect(() => {
    getUsersFromApi(currentPage)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(" this is the res", res);
        setCurrentUserList(res.data);
        setTotalPage(res.total_pages);
      });
    // setCurrentPosts([posts[0]]);
  }, [currentPage]);
  return (
    <>
      <ul>
        {currentUSersList.map((currentUSer) => {
          return (
            <li>
              <img src={currentUSer.avatar} />
              <b>{currentUSer.first_name}: </b> {currentUSer.email} <br />
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
