import React, { useEffect, useState } from "react";

function Fetching() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const record_per_page = 10;
  const getusers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setUsers(data.slice((currentPage - 1) * 10, currentPage * 10));
    setTotalPage(Math.ceil(data.length / record_per_page));
  };
  const getCount = (maxVal) => {
    const data = [];
    for (let i = 1; i <= maxVal; i++) {
      data.push(i);
    }
    return data;
  };
  useEffect(() => {
    getusers();
  }, [currentPage]);
  return (
    <>
      <div>
        {users.map((curuser, index) => {
          return (
            <div key={index}>
              <ul>
                <li>
                  <h3>{curuser.title}</h3>
                  <b> has ID {curuser.userId}</b>
                  <b>and Sub Id</b>
                  <em>{curuser.id}</em>
                  <p>and Body is</p>
                  <em style={{ color: "blue" }}>{curuser.body}</em>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div>
        {getCount(totalPage).map((val) => (
          <button key={val} onClick={() => setCurrentPage(val)}>
            {val}
          </button>
        ))}
      </div>
    </>
  );
}

export default Fetching;
