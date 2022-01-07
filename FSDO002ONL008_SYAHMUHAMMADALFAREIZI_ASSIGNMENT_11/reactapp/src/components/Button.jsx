function Button(props) {
  return (
    <>
      <div>
        {props.btnbody == null ? (
          <div></div>
        ) : (
          <button className="btn btn-light">{props.btnbody}</button>
        )}
      </div>
    </>
  );
}

export default Button;
