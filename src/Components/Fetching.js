import React, { useEffect, useState } from "react";

function Fetching() {
  const [users, setUsers] = useState([]);
  const getusers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    setUsers(await response.json());
  };
  useEffect(() => {
    getusers();
  }, []);
  return (
    <>
      <h2>Fetching API Data</h2>
      <div>
        {users.map((curuser) => {
          return (
            <div>
              <ul>
                <li>
                  <h3>{curuser.title}</h3>
                  <b> has ID {curuser.userId}</b>
                  <em>and sub Id{curuser.id}</em>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Fetching;
