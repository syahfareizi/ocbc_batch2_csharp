import React from "react";
import "./styles/Card.css";

function Card(props) {
  return (
    <div className="Card">
      <div>{props.id}</div>
      <div>
        {props.title} - {props.status ? "Completed" : "Pending"}
      </div>
    </div>
  );
}

export default Card;
