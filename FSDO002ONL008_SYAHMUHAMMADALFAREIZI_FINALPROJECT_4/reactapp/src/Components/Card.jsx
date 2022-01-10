import Button from "./Button";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  toNewUser,
  getUserByKey,
  updateUserByKey,
  deleteUser,
  debug,
} from "../store/Actions/actionList";

function Card(props) {
  // const user = useSelector(({ user }) => user);
  const [key, setkey] = useState(0);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastname] = useState("");
  let newUser = { key: key, firstName: firstName, lastName: lastName };

  return (
    <>
      {/* {JSON.stringify(newUser)} */}
      <div className="card text-white bg-success m-3">
        <div className="card-header">API Test App</div>
        <div className="card-body">
          <h5 className="card-title">API TEST</h5>
          <div className="container d-flex flex-wrap justify-content-center">
            <form className="m-3">
              <label className="m-2"> Key :</label>
              <input type="number" onChange={(e) => setkey(+e.target.value)} />
              <br />
              <label className="m-2"> First Name :</label>
              <input
                type="text"
                onChange={(e) => setfirstName(e.target.value)}
              />
              <br />
              <label className="m-2"> Last Name :</label>
              <input
                type="text"
                onChange={(e) => setlastname(e.target.value)}
              />
            </form>
          </div>
          <div className="row">
            <div className="col">
              <Button
                warna={"primary"}
                btnbody={"Create"}
                fungsi={toNewUser}
                newuser={newUser}
              />
            </div>
            <div className="col">
              <Button
                warna={"secondary"}
                btnbody={"Read"}
                fungsi={getUserByKey}
                newuser={key}
              />
            </div>
            <div className="col">
              <Button
                warna={"danger"}
                btnbody={"Update"}
                newuser={newUser}
                fungsi={updateUserByKey}
              />
            </div>
            <div className="col">
              <Button
                warna={"dark"}
                btnbody={"Delete"}
                newuser={key}
                fungsi={deleteUser}
              />
            </div>
            <div className="col">
              <Button
                warna={"warning"}
                btnbody={"Debug"}
                newuser={newUser}
                fungsi={debug}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
