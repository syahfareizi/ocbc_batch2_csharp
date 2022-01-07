export const toDone = (payload) => {
  return (dispatch, getState) => {
    let newtask = [...getState().task.donetask];
    newtask.push(payload);
    setTimeout(() => {
      dispatch({ type: "evaluatetodone", payload: newtask });
      newtask = [...getState().task.donetask];
      newtask.pop(payload);
      console.log(newtask);
      dispatch({ type: "inproggresstoevaluate", payload: newtask });
    }, 50);
  };
};
