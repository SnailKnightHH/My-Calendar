import "../css/calendar.css";
import React from "react";

const Dayslot = (props) => {
  const switchToTaskLisks = () => {
    console.log("props.id" + props.id);
    props.getKeyOfDaySlot(props.id);
    props.renderCalendar(true);
  };

  return (
    <React.Fragment>
      {!props.goToTasks && (
        <button className="day_slot" onClick={switchToTaskLisks}>
          <h2>{props.day_num}</h2>
          <h2 className="day_slot_text">Tasks: {props.task_num}</h2>
          <h2 className="day_slot_text">Finished: {props.finished_num}</h2>
        </button>
      )}
    </React.Fragment>
  );
};

export default Dayslot;
