import "../css/calendar.css";
import Dayslot from "./Dayslot";

// const CalendarGrid = props => {
//   return <div className="CalendarGrid">{props.children}</div>;
// };
const CalendarGrid = (props) => {
  return (
    <div className="CalendarGrid">
      {props.all_slots.map((slot) => (
        <Dayslot
          day_num={slot.day_num}
          task_num={slot.task_num}
          finished_num={slot.finished_num}
        />
      ))}
    </div>
  );
};

export default CalendarGrid;
