import "../css/calendar.css";
import React, { useState } from "react";
import TodoPage from "./TodoPage";
import ErrorModel from "./ErrorModel";

const Dayslot = (props) => {
  const switchToTaskLisks = () => {
    props.getKeyOfDaySlot(props.id);
    props.renderCalendar(true);
  };

  return (
    <React.Fragment>
      {!props.goToTasks && (
        <button
          class="day_slot"
          onClick={switchToTaskLisks}
          style={{ background: "white" }}
        >
          <h2>{props.day_num}</h2>
          <h2>Tasks: {props.task_num}</h2>
          <h2>Finished: {props.finished_num}</h2>
        </button>
      )}

      {/* {props.goToTasks && (
        <TodoPage
          detectError={props.detectError}
          goToCalendar={props.switchToCalendar}
        />
      )}
      {props.error && <ErrorModel onConfirm={props.clearError} />} */}
    </React.Fragment>
  );
};

// {goToTasks && <TodoPage detectError={detectError} goToCalendar={switchToCalendar}/>}
// {error && <ErrorModel onConfirm={clearError} />}

export default Dayslot;
