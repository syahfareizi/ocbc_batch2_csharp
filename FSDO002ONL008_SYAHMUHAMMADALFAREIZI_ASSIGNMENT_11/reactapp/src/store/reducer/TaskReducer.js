// const [inputTest, setInputTest] = useState("");
// * 1 - buat initialState
// * 2 - buat reducer, kemudian export
const initialState = {
  inputtask: "",
  backlogtask: [],
  inproggresstask: [],
  evaluatetask: [],
  donetask: [],
};

export default function taskReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "toinputtask":
      return { ...state, inputtask: payload };
    case "inputtobacklog":
      return { ...state, backlogtask: payload };
    case "backlogtoinproggress":
      return { ...state, inproggresstask: payload };
    // case "inproggresstoevaluate":
    //   return { ...state, counter: state.counter - payload };
    // case "evaluatetodone":
    //   return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
}
