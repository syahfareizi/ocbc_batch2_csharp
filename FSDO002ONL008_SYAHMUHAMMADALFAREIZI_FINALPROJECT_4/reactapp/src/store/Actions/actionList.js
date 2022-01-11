import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
//CREATE NEW USER
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
          dispatch({ type: "updatekey", payload: 0 });
          dispatch({ type: "updatefn", payload: "" });
          dispatch({ type: "updateln", payload: "" });
          result.value == null
            ? toast.warning("Error Occured", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            : toast.success("Data Created", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        });
    }, 0);
  };
};
export const getUserByKey = (key) => {
  return (dispatch) => {
    setTimeout(() => {
      fetch("/keys/" + key)
        .then((result) => result.json())
        .then((result) => {
          dispatch({ type: "setitem", payload: result });
          dispatch({ type: "updatekey", payload: 0 });
          dispatch({ type: "updatefn", payload: "" });
          dispatch({ type: "updateln", payload: "" });
          result.value == null
            ? toast.warning("Error Occured", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            : toast.success("Data Founded", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        });
    }, 0);
  };
};
export const debug = () => {
  return (dispatch) => {
    setTimeout(() => {
      fetch("/debug")
        .then((result) => result.json())
        .then((result) => {
          dispatch({ type: "getallitem", payload: result });
          dispatch({ type: "updatekey", payload: 0 });
          dispatch({ type: "updatefn", payload: "" });
          dispatch({ type: "updateln", payload: "" });
        });
    }, 0);
  };
};
// UPDATE EXISTING USER
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
          dispatch({ type: "updatekey", payload: 0 });
          dispatch({ type: "updatefn", payload: "" });
          dispatch({ type: "updateln", payload: "" });
          result.value == null
            ? toast.warning("Error Occured", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            : toast.success("Data Updated", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        });
    }, 0);
  };
};
// DELETE EXISTING USER
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
          dispatch({ type: "updatekey", payload: 0 });
          dispatch({ type: "updatefn", payload: "" });
          dispatch({ type: "updateln", payload: "" });
          result.value == null
            ? toast.warning("Error Occured", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            : toast.error("Data Deleted", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
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
