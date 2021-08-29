import "../css/TodoPage.css";

const TimeSlot = (props) => {
  const updateFinished = (id) => {
    console.log("here" + id);
    if (document.getElementById(id) != null) {
      if (document.getElementById(id).checked) {
        alert("Checked");
      }
    } else {
      console.log("null");
    }
  };

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
      <span>
        <input
          type="checkbox"
          name={props.checkboxid}
          id={props.checkboxid}
          onClick={() => props.updateFinished(props.checkboxid)}
          className="checkbox"
        />
      </span>
    </li>
  );
};

export default TimeSlot;
