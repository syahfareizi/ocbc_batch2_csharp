import { useDispatch } from "react-redux";

function Button(props) {
  const dispatch = useDispatch();
  const cnString = "btn m-1 btn-" + props.warna;
  return (
    <>
      <button
        className={cnString}
        onClick={() => dispatch(props.fungsi(props.newuser))}
      >
        {props.btnbody}
      </button>
    </>
  );
}

export default Button;
