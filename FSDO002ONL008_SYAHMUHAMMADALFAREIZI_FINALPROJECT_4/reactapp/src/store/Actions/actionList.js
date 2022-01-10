export const toNewUser = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      fetch("/keys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((result) => result.json())
        .then((result) => {
          dispatch({ type: "setitem", payload: result });
          dispatch(debug());
        });
    }, 0);
  };
};
export const getUserByKey = (key) => {
  return (dispatch) => {
    setTimeout(() => {
      fetch("/keys/" + key)
        .then((result) => result.json())
        .then((result) => dispatch({ type: "setitem", payload: result }));
    }, 0);
  };
};
export const debug = () => {
  return (dispatch) => {
    setTimeout(() => {
      fetch("/debug")
        .then((result) => result.json())
        .then((result) => dispatch({ type: "getallitem", payload: result }));
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
        .then((result) => {
          dispatch({ type: "setitem", payload: result });
          dispatch(debug());
        });
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
        .then((result) => {
          dispatch({ type: "setitem", payload: result });
          dispatch(debug());
        });
    }, 0);
  };
};

export const selectUser = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "updatekey", payload: payload.key });
      dispatch({ type: "updatefn", payload: payload.firstName });
      dispatch({ type: "updateln", payload: payload.lastName });
    }, 0);
  };
};
export const updateKey = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "updatekey", payload: payload });
    }, 0);
  };
};
export const updateFirstname = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "updatefn", payload: payload });
    }, 0);
  };
};
export const updateLastname = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "updateln", payload: payload });
    }, 0);
  };
};
