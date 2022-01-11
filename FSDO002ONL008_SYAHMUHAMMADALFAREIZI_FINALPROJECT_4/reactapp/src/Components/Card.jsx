import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import {
  toNewUser,
  getUserByKey,
  updateUserByKey,
  deleteUser,
  // debug,
  updateKey,
  updateFirstname,
  updateLastname,
} from "../store/Actions/actionList";

function Card(props) {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  let newUser = {
    key: user.key,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  return (
    <>
      {/* {JSON.stringify(user)} */}
      <div className="card text-white bg-success m-3">
        <div className="card-header">API Test App</div>
        <div className="card-body">
          <h5 className="card-title">API TEST</h5>
          <div className="container d-flex flex-wrap justify-content-center">
            <form className="m-3">
              <label className="m-2"> Key :</label>
              <input
                type="number"
                value={user.key}
                onChange={(e) => dispatch(updateKey(+e.target.value))}
              />
              <br />
              <label className="m-2"> First Name :</label>
              <input
                type="text"
                onChange={(e) => dispatch(updateFirstname(e.target.value))}
                value={user.firstName}
              />
              <br />
              <label className="m-2"> Last Name :</label>
              <input
                type="text"
                onChange={(e) => dispatch(updateLastname(e.target.value))}
                value={user.lastName}
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
                newuser={user.key}
              />
            </div>
            <div className="col">
              <Button
                warna={"warning"}
                btnbody={"Update"}
                newuser={newUser}
                fungsi={updateUserByKey}
              />
            </div>
            <div className="col">
              <Button
                warna={"danger"}
                btnbody={"Delete"}
                newuser={user.key}
                fungsi={deleteUser}
              />
            </div>
            {/* <div className="col">
              <Button
                warna={"dark"}
                btnbody={"Debug"}
                newuser={newUser}
                fungsi={debug}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
