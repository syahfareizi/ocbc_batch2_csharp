// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Resultcard(props) {
  // const [getallUser, setgetallUser] = useState();
  const allUser = useSelector((user) => user.user.user);
  // useEffect(() => {
  //   fetch("/debug")
  //     .then((result) => result.json())
  //     .then((data) => {
  //       setgetallUser(data);
  //     });
  // }, []);
  return (
    <>
      <div className="card text-white bg-dark m-3">
        <div className="card-header">Messages</div>
        <div className="card-body">
          <h5 className="card-title">Result Mesesage</h5>
          <p>
            <code>{JSON.stringify(allUser)}</code>
          </p>
          {/* <h5 className="card-title">Tabel Users</h5> */}
          {/* {Object.keys(allUser).map((data) => (
            <div>
              <div>{allUser[data].key}</div>
              <div>{allUser[data].firstName}</div>
              <div>{allUser[data].lastName}</div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}

export default Resultcard;
