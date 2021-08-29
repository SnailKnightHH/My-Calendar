import "../css/calendar.css";
import Dayslot from "./Dayslot";
import WeekdaysBar from "./WeekdaysBar";

const CalendarGrid = (props) => {
  const ifDisplayCalendar = (ifRender) => {
    props.switchToTaskLisks(ifRender);
  };

  return (
    <div className="CalendarGrid">
      <WeekdaysBar />
      {props.all_slots.map((slot, index) => {
        return (
          <Dayslot
            key={index}
            id={index}
            day_num={slot.day_num}
            task_num={slot.task_num}
            finished_num={slot.finished_num}
            renderCalendar={ifDisplayCalendar}
            getKeyOfDaySlot={props.getKeyOfDaySlot}
          />
        );
      })}
    </div>
  );
};

export default CalendarGrid;
