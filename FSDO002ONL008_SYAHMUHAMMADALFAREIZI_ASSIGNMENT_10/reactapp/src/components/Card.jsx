import React from "react";

function Card(props) {
  const visitors = Array.from(props.visitors);
  return (
    <>
      <div className="m-3 rounded bg-light p-2 text-center"> {"<"}== </div>
      {props.visitors.length === 0 ? (
        <div className="container m-3 bg-warning rounded p-2 text-center">
          {" "}
          Tidak ada antrian !{" "}
        </div>
      ) : (
        visitors.map((data) => (
          <div className="container m-3 bg-warning rounded p-2 text-center">
            {data}
          </div>
        ))
      )}
    </>
  );
}

export default Card;
