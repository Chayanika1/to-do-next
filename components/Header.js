import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

function Header() {
  const [content, setName] = useState(" ");
  const [getData, setGetData] = useState(" ");

  //post data
  const addTodo = () => {
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("done");
      });
  };

  //get data

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setGetData(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>hello js</h1>
      <hr />
      <div>
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <button onClick={addTodo}>Add</button>
      </div>
      <hr />
      <div>
        {getData?.map((gd) => {
          return (
            <div key={gd._id}>
              <h3>{gd.content}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
