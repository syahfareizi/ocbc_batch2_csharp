import Task from "./Task";

function Card(props) {
  const tipe = props.tipe;
  const title = props.title;
  const btnbody = props.btnbody;
  const fungsi = props.fungsi;
  const cnString = "card text-white bg-" + tipe + " m-3";
  console.log(cnString);
  return (
    <>
      <div className={cnString}>
        <div className="card-header">{props.header}</div>
        <Task title={title} btnbody={btnbody} fungsi={fungsi} />
      </div>
    </>
  );
}

export default Card;
