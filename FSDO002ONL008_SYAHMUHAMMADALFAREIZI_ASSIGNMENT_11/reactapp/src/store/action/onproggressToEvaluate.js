export const toEvaluate = (payload) => {
  return (dispatch, getState) => {
    let newtask = [...getState().task.evaluatetask];
    newtask.push(payload);
    setTimeout(() => {
      dispatch({ type: "inproggresstoevaluate", payload: newtask });
      newtask = [...getState().task.inproggresstask].filter((el) => {
        return el !== payload;
      });
      dispatch({ type: "backlogtoinproggress", payload: newtask });
    }, 50);
  };
};
