export const toClear = (payload) => {
  return (dispatch, getState) => {
    let newtask = [];
    setTimeout(() => {
      dispatch({ type: "donetoclear", payload: newtask });
    }, 50);
  };
};
