import { useState, useEffect, useRef } from "react";
import UntimedTasks from "./UntimedTasks";
import AddUntimedTask from "./AddUntimedTask";
import TimedTasks from "./TimedTasks";
import useDidMountEffect from "./useDidMountEffect";
import "../css/TodoPage.css";
import "bootstrap/dist/css/bootstrap.css";

let timed_todo_list = [
  { time: "05:00", task: "" },
  { time: "06:00", task: "" },
  { time: "07:00", task: "" },
  { time: "08:00", task: "" },
  { time: "09:00", task: "" },
  { time: "10:00", task: "" },
  { time: "11:00", task: "" },
  { time: "12:00", task: "" },
  { time: "13:00", task: "" },
  { time: "14:00", task: "" },
  { time: "15:00", task: "" },
  { time: "16:00", task: "" },
  { time: "17:00", task: "" },
  { time: "18:00", task: "" },
  { time: "19:00", task: "" },
  { time: "20:00", task: "" },
  { time: "21:00", task: "" },
  { time: "22:00", task: "" },
  { time: "23:00", task: "" },
  { time: "24:00", task: "" },
  { time: "01:00", task: "" },
  { time: "02:00", task: "" },
  { time: "03:00", task: "" },
  { time: "04:00", task: "" },
];

const TodoPage = (props) => {
  // let timed_task_num = 0;
  // let untimed_task_num = 0;
  let finished_num = 0;

  const [timed_task_num, setTimed_task_num] = useState(0);
  const [untimed_task_num, setUntimed_task_num] = useState(0);

  const updateTaskNum = () => {
    let timed_task_num = 0;
    for (let i = 0; i < timed_todo_list.length; i++) {
      if (timed_todo_list[i].task != "") {
        timed_task_num++;
      }
    }
    return timed_task_num;
  };

  const thisTasksArrName = "tasksArr" + props.id;
  const thisTimed_todo_list = "timed_todo_list" + props.id;

  const [tasksArr, setTasksArr] = useState([]);

  useEffect(() => {
    let new_tasksArr = JSON.parse(localStorage.getItem(thisTasksArrName));
    //console.log(new_tasksArr);
    if (new_tasksArr != null) {
      setTasksArr(new_tasksArr);
      setUntimed_task_num(new_tasksArr.length);
      //  update_task_num.current = false;
    }
    let new_timedTasks = JSON.parse(localStorage.getItem(thisTimed_todo_list));
    if (new_timedTasks != null) {
      timed_todo_list = [...new_timedTasks];
      for (let i = 0; i < new_timedTasks.length; i++) {
        if (new_timedTasks[i].task.length > 0) {
          document.getElementById(new_timedTasks[i].time).innerHTML =
            new_timedTasks[i].task;
        }
      }
      setTimed_task_num(updateTaskNum());
    }
    //console.log(untimed_task_num + " " + timed_task_num);
    props.updateSlotInfo(
      untimed_task_num + timed_task_num,
      finished_num,
      props.id
    );
  }, []);

  const addingTask = (task_str) => {
    const new_task = { id: Math.random().toString(), task: task_str };

    setTasksArr((prevTasksArr) => {
      return [...prevTasksArr, new_task];
    });
    // console.log(tasksArr);
    // task_num++;
    // localStorage.setItem(thisTasksArrName, JSON.stringify(tasksArr));
    // console.log(`adding task: ${tasksArr.length}`);
  };

  useDidMountEffect(() => {
    //console.log(JSON.stringify(tasksArr));
    localStorage.setItem(thisTasksArrName, JSON.stringify(tasksArr));
    setUntimed_task_num(tasksArr.length);
    // console.log(tasksArr.length);
    // console.log(untimed_task_num);
    // console.log(untimed_task_num + " " + timed_task_num);
    // FOR SOME REASON untimed_task_num IS NOT UPDATED IMMEDIATELY
    props.updateSlotInfo(
      tasksArr.length + timed_task_num,
      finished_num,
      props.id
    );
  }, [tasksArr]);
  //! this was originally inside addingTask function, but
  //! since useState is asynchronous, the value is not updated immediately
  //! thus, useEffect is used to cope with this
  //! this custom hook is to prevent useEffect hook run on the initial render, which
  //! will happen regardless of the dependencies

  const has_error = (if_has_error) => {
    props.detectError(if_has_error);
  };

  const goBackToCalendar = () => {
    props.goToCalendar();
  };

  const clearThisEntry = () => {
    localStorage.removeItem(thisTasksArrName);
    localStorage.removeItem(thisTimed_todo_list);
    const message = "Entry Cleared\nRefresh to See Changes";
    alert(message);
  };

  const updateTimedTask = (time, event) => {
    for (let i = 0; i < timed_todo_list.length; i++) {
      if (timed_todo_list[i].time === time) {
        timed_todo_list[i].task = event.target.value;
        break;
      }
    }
    localStorage.setItem(thisTimed_todo_list, JSON.stringify(timed_todo_list));
    setTimed_task_num(updateTaskNum());
    //console.log(untimed_task_num + " " + timed_task_num);
    props.updateSlotInfo(
      timed_task_num + untimed_task_num,
      finished_num,
      props.id
    );
  };

  return (
    <div className="TodoPage">
      <div className="TodoPageTitle">
        <h1 className="title">Schedule</h1>
        <h1 className="title">Agenda</h1>
      </div>
      <div className="TodoPageGrid">
        <TimedTasks
          timed_todo_list={timed_todo_list}
          updateTimedTask={updateTimedTask}
        />

        <div>
          <AddUntimedTask addTask={addingTask} detectError={has_error} />
          <UntimedTasks untimedTasks={tasksArr} />
        </div>
      </div>

      <div className="buttons">
        <button class="btn btn-primary Back_btn" onClick={goBackToCalendar}>
          Back
        </button>
        <button class="btn btn-primary clear_btn" onClick={clearThisEntry}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoPage;
