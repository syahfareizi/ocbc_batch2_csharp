import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toNewUser } from "../store/Actions/actionList";

function Card(props) {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);
  const [key, setkey] = useState(0);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastname] = useState("");
  let newUser = { key: key, firstName: firstName, lastName: lastName };

  return (
    <>
      {JSON.stringify(user)}
      <br />
      {JSON.stringify(newUser)}
      <div className="card text-white bg-info m-3">
        <div className="card-header">API Test App</div>
        <div className="card-body">
          <h5 className="card-title">API TEST</h5>
          <div className="container d-flex flex-wrap justify-content-center">
            <form className="m-3">
              <label> Masukkan Key :</label>
              <input type="text" onChange={(e) => setkey(e.target.value)} />
              <br />
              <label> First Name :</label>
              <input
                type="text"
                onChange={(e) => setfirstName(e.target.value)}
              />
              <br />
              <label> Last Name :</label>
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
              <Button warna={"secondary"} btnbody={"Read"} />
            </div>
            <div className="col">
              <Button warna={"danger"} btnbody={"Update"} />
            </div>
            <div className="col">
              <Button warna={"dark"} btnbody={"Delete"} />
            </div>
            <div className="col">
              <Button warna={"warning"} btnbody={"Debug"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
