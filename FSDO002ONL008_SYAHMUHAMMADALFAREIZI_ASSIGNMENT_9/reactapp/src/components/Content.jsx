import React from "react";
import "./styles/Content.css";
function Content(props) {
  return (
    <>
      <div className="Card">
        <h1 style={{ color: "blue" }}>{props.title}</h1>
        <p>{props.body}</p>
        <p style={{ color: "grey", fontSize: "15px" }}>{props.date}</p>
      </div>
    </>
  );
}

export default Content;
