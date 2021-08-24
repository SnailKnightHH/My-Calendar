import "../css/calendar.css";

const Dayslot = (props) => {
  return (
    <div class="day_slot">
      <h2>{props.day_num}</h2>
      <h2>Tasks: {props.task_num}</h2>
      <h2>Finished: {props.finished_num}</h2>
    </div>
  );
};

export default Dayslot;
