import "../css/calendar.css";
import { useState } from "react";
import TodoPage from "./TodoPage";
import ErrorModel from "./ErrorModel";

const Dayslot = (props) => {
  const switchToTaskLisks = () => {
    props.renderCalendar(true);
  };

  return (
    <button
      class="day_slot"
      onClick={switchToTaskLisks}
      style={{ background: "white" }}
    >
      <h2>{props.day_num}</h2>
      <h2>Tasks: {props.task_num}</h2>
      <h2>Finished: {props.finished_num}</h2>
    </button>
  );
};

{
  /* <TodoPage detectError={detectError} />
      {error && <ErrorModel onConfirm={clearError} />} */
}

export default Dayslot;
