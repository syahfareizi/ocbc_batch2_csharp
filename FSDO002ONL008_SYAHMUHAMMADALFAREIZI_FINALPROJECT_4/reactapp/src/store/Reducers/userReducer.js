const initialState = {
  // newUser: { firstName: "", lastName: " ", key: 0 },
  user: {},
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // case "tonewuser":
    //   return { ...state, newUser: payload };
    case "getoneuser":
      return { ...state, user: payload };
    case "updateuser":
      return { ...state, user: payload };
    case "createuser":
      return { ...state, user: payload };
    case "deleteuser":
      return { ...state, user: payload };
    case "debug":
      return { ...state, user: payload };
    default:
      return state;
  }
}
