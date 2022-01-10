export const toNewUser = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      // dispatch({ type: "tonewuser", payload: payload });
      fetch("/keys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((result) => result.json())
        .then((result) => dispatch({ type: "createuser", payload: result }));
    }, 0);
  };
};
export const getUserByKey = (key) => {
  return (dispatch) => {
    setTimeout(() => {
      fetch("/keys/" + key)
        .then((result) => result.json())
        .then((result) => dispatch({ type: "getoneuser", payload: result }));
    }, 0);
  };
};
export const debug = () => {
  return (dispatch) => {
    setTimeout(() => {
      fetch("/debug")
        .then((result) => result.json())
        .then((result) => dispatch({ type: "debug", payload: result }));
    }, 0);
  };
};
export const updateUserByKey = (payload) => {
  console.log(payload);
  return (dispatch) => {
    setTimeout(() => {
      fetch("/keys/" + payload.key, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((result) => result.json())
        .then((result) => dispatch({ type: "updateuser", payload: result }));
    }, 0);
  };
};

export const deleteUser = (key) => {
  console.log(key);
  return (dispatch) => {
    setTimeout(() => {
      fetch("/keys/" + key, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .then((result) => dispatch({ type: "deleteuser", payload: result }));
    }, 0);
  };
};
