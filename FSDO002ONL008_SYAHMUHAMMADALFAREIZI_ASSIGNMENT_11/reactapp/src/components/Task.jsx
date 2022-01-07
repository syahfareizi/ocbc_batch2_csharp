import Button from "./Button";

function Task(props) {
  const titles = [...props.title];
  const btnbody = props.btnbody;
  const fungsi = props.fungsi;
  return (
    <>
      {titles.length === 0 ? (
        <div class="card-body">
          <div class="card-body">
            <h5 class="card-title">Tidak ada task.</h5>
          </div>
        </div>
      ) : (
        <div class="card-body">
          {titles.map((title, index) => (
            <div class="card-body" key={index}>
              <h5 class="card-title">
                {index + 1}.{title}
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
