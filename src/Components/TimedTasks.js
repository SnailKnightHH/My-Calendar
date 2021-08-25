import "../css/TodoPage.css";
import TimeSlot from "./TimeSlot";

const TimedTasks = (props) => {
  const updateTimedTask = (time, event) => {
    console.log(time);
    for (let i = 0; i < props.timed_todo_list.length; i++) {
      if (props.timed_todo_list[i].time === time) {
        props.timed_todo_list[i].task = event.target.value;
        console.log(props.timed_todo_list[i].task);
        break;
      }
    }
    localStorage.setItem(
      "timed_todo_list",
      JSON.stringify(props.timed_todo_list)
    );
  };

  return (
    <ul className="Timed_ul">
      <TimeSlot id="05:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="06:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="07:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="08:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="09:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="10:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="11:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="12:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="13:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="14:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="15:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="16:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="17:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="18:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="19:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="20:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="21:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="22:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="23:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="24:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="01:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="02:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="03:00" updateTimedTask={props.updateTimedTask} />
      <TimeSlot id="04:00" updateTimedTask={props.updateTimedTask} />
    </ul>
  );
};

export default TimedTasks;
