import "../css/TodoPage.css";

const TimeSlot = (props) => {
  return (
    <li>
      {props.id}{" "}
      <textarea
        name={props.id}
        id={props.id}
        cols="40"
        rows="1"
        placeholder="Tasks"
        className="Timed_text_area"
        onChange={(e) => props.updateTimedTask(props.id, e)}
      ></textarea>
    </li>
  );
};

export default TimeSlot;
