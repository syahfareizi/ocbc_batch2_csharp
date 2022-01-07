export const toInputTask = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "toinputtask", payload: payload });
    }, 50);
  };
};
