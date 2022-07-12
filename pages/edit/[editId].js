import { useRouter } from "next/router";
import React from "react";

function Editpage() {
  const router = useRouter();

  const handelSubmit = (e) => {
    const singleId = router.query.editId;
    const content = e.target.name.value;
    e.preventDefault();

    fetch(`http://localhost:3000/api/users/${singleId}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({content})
    })
    
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "200px",
      }}
    >
      <form onSubmit={handelSubmit} action="">
        <input name="name" type="text" />
        <input type="submit" value="save" />
      </form>
    </div>
  );
}

export default Editpage;
