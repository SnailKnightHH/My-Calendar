import "../css/calendar.css";
import Dayslot from "./Dayslot";
import { useState } from "react";

// const CalendarGrid = props => {
//   return <div className="CalendarGrid">{props.children}</div>;
// };
const CalendarGrid = (props) => {
  const ifDisplayCalendar = (ifRender) => {
    props.switchToTaskLisks(ifRender);
  };

  return (
    <div className="CalendarGrid">
      {props.all_slots.map((slot) => (
        <Dayslot
          key={Math.random().toString()}
          day_num={slot.day_num}
          task_num={slot.task_num}
          finished_num={slot.finished_num}
          renderCalendar={ifDisplayCalendar}
        />
      ))}
    </div>
  );
};

export default CalendarGrid;
