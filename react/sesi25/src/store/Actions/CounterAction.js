export const incrementAction = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "increment", payload: 1 });
    }, 10);
  };
};
