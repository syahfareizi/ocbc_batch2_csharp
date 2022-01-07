import Task from "./Task";

function Card(props) {
  const tipe = props.tipe;
  const title = props.title;
  const btnbody = props.btnbody;
  const cnString = "card text-white bg-" + tipe + " m-3";
  console.log(cnString);
  return (
    <>
      <div class={cnString}>
        <div class="card-header">{props.header}</div>
        <Task title={title} btnbody={btnbody} />
      </div>
    </>
  );
}

export default Card;
