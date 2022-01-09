export const toNewUser = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "tonewuser", payload: payload });
    }, 0);
  };
};
// export const toNewUserfn = (payload) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch({ type: "tonewuser", payload: payload });
//     }, 0);
//   };
// };
// export const toNewUserln = (payload) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch({ type: "tonewuser", payload: payload });
//     }, 0);
//   };
// };
