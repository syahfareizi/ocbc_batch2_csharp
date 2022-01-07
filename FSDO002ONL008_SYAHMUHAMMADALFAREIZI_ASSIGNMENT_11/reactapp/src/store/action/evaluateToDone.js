export const toDone = (payload) => {
  return (dispatch, getState) => {
    let newtask = [...getState().task.donetask];
    newtask.push(payload);
    setTimeout(() => {
      dispatch({ type: "evaluatetodone", payload: newtask });
      newtask = [...getState().task.evaluatetask].filter((el) => {
        return el !== payload;
      });
      dispatch({ type: "inproggresstoevaluate", payload: newtask });
    }, 50);
  };
};
