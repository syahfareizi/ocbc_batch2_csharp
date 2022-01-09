const initialState = {
  newUser: { firstName: "Syah", lastName: " Fareizi", key: 99 },
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "tonewuser":
      return { ...state, newUser: payload };
    // case "tonewuserfn":
    //   return { ...state, newUser: payload };
    // case "tonewuserln":
    //   return { ...state, inputtask: payload };
    default:
      return state;
  }
}
