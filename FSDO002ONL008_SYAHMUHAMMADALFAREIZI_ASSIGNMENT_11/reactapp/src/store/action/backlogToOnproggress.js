export const toInporgress = (payload) => {
  return (dispatch, getState) => {
    let newtask = [...getState().task.inproggresstask];
    newtask.push(payload);
    setTimeout(() => {
      dispatch({ type: "backlogtoinproggress", payload: newtask });
      newtask = [...getState().task.backlogtask].filter((el) => {
        return el !== payload;
      });
      // newtask.pop(payload);
      // console.log(newtask);
      dispatch({ type: "inputtobacklog", payload: newtask });
    }, 50);
  };
};
