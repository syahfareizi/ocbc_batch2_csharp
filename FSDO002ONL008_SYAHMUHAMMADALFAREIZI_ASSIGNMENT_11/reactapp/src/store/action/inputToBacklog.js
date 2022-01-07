import { toInputTask } from "./toInput";

export const toBacklog = (payload) => {
  return (dispatch, getState) => {
    const newtask = [...getState().task.backlogtask];
    newtask.push(payload);
    setTimeout(() => {
      dispatch({ type: "inputtobacklog", payload: newtask });
      dispatch(toInputTask(""));
    }, 50);
  };
};
