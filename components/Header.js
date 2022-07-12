import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

function Header() {
  const [content, setName] = useState(" ");
  const [getData, setGetData] = useState([]);

  //navigated to edit page

  //post data
  const addTodo = () => {
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    }).then((res) => res.json());
  };

  //get data

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setGetData(data));
  }, []);

  //delete data

  const deleteIteam = (id) => {
    fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };
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
        {getData?.map((g) => {
          return (
            <div className={styles.content} key={g._id}>
              <h3 className={styles.heading}>{g.content}</h3>
              <div>
                <button
                  onClick={() => deleteIteam(g._id)}
                  className={styles.del}
                >
                  delete
                </button>
                <Link href={`/edit/${g._id}`}>
                  <button>edit</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
