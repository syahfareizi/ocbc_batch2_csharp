export const toEvaluate = (payload) => {
  return (dispatch, getState) => {
    let newtask = [...getState().task.evaluatetask];
    newtask.push(payload);
    setTimeout(() => {
      dispatch({ type: "inproggresstoevaluate", payload: newtask });
      newtask = [...getState().task.evaluatetask];
      newtask.pop(payload);
      console.log(newtask);
      dispatch({ type: "backlogtoinproggress", payload: newtask });
    }, 50);
  };
};
