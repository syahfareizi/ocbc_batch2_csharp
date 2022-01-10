// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { deleteUser, selectUser } from "../store/Actions/actionList";
// import { useSelector } from "react-redux";
import Button from "./Button";

function Tablecard(props) {
  // const [getallUser, setgetallUser] = useState();
  const [result, setresult] = useState({});
  useEffect(() => {
    fetch("/debug").then((result) =>
      result
        .json()
        .then((result) => setresult(result))
        .then()
    );
  }, [result]);
  return (
    <>
      <table class="table table-striped align-items-center">
        <thead>
          <tr>
            <th scope="col">Key</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(result).map((data) => (
            <tr>
              <th scope="row">{result[data].key}</th>
              <td>{result[data].firstName}</td>
              <td>{result[data].lastName}</td>
              <td>
                <Button
                  warna={"warning"}
                  btnbody={"Update"}
                  newuser={{
                    key: result[data].key,
                    firstName: result[data].firstName,
                    lastName: result[data].lastName,
                  }}
                  fungsi={selectUser}
                />
                <Button
                  warna={"danger"}
                  btnbody={"Delete"}
                  newuser={result[data].key}
                  fungsi={deleteUser}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tablecard;
