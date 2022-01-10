const initialState = {
  key: 0,
  firstName: "",
  lastName: "",
  user: {},
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "updatekey":
      return { ...state, key: payload };
    case "updatefn":
      return { ...state, firstName: payload };
    case "updateln":
      return { ...state, lastName: payload };
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
