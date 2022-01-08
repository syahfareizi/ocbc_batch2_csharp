import Button from "./Button";

function Task(props) {
  const titles = [...props.title];
  const btnbody = props.btnbody;
  const fungsi = props.fungsi;
  return (
    <>
      {titles.length === 0 ? (
        <div className="card-body">
          <div className="card-body">
            <h5 className="card-title">Tidak ada task.</h5>
          </div>
        </div>
      ) : (
        <div className="card-body">
          {titles.map((title, index) => (
            <div className="card-body" key={index}>
              <h5 className="card-title">
                {index + 1}. {title}
              </h5>
              <Button btnbody={btnbody} fungsi={fungsi} title={title} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Task;
