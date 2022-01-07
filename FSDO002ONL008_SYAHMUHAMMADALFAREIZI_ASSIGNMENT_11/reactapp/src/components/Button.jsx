import { useDispatch } from "react-redux";

function Button(props) {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {props.btnbody == null ? (
          <div></div>
        ) : (
          <button
            className="btn btn-light"
            onClick={() => dispatch(props.fungsi(props.title))}
          >
            {props.btnbody}
          </button>
        )}
      </div>
    </>
  );
}

export default Button;
