const initialState = {
  key: 0,
  firstName: "",
  lastName: "",
  result: {},
  Item: {},
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
    case "setitem":
      return { ...state, Item: payload };
    case "getallitem":
      return { ...state, result: payload };
    // case "updateuser":
    //   return { ...state, Notification: payload };
    // case "createuser":
    //   return { ...state, Notification: payload };
    // case "deleteuser":
    //   return { ...state, Notification: payload };
    // case "debug":
    //   return { ...state, Notification: payload };
    default:
      return state;
  }
}
