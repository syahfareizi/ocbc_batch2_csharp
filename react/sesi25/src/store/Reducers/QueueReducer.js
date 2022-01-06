const initialState = {
  queue: 0,
};

function Queue(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "addqueue":
      return { ...state, queue: state.queue + payload };
    default:
      return state;
  }
}

export default Queue;
