import Button from "./Button";

function Task(props) {
  const titles = [...props.title];
  const btnbody = props.btnbody;
  return (
    <>
      <div class="card-body">
        {titles.map((title, index) => (
          <div class="card-body" key={index}>
            <h5 class="card-title">
              {index + 1}.{title}
            </h5>
            <Button btnbody={btnbody} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Task;
