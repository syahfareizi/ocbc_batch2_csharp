export const toClear = (payload) => {
  return (dispatch, getState) => {
    let newtask = [...getState().task.donetask].filter((el) => {
      return el !== payload;
    });

    setTimeout(() => {
      dispatch({ type: "donetoclear", payload: newtask });
    }, 50);
  };
};
