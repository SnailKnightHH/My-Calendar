import { useState, useEffect } from "react";
import UntimedTasks from "./UntimedTasks";
import AddUntimedTask from "./AddUntimedTask";
import TimedTasks from "./TimedTasks";
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

let task_num = 0;

const TodoPage = (props) => {
  const thisTasksArrName = "tasksArr" + props.id;
  const thisTimed_todo_list = "timed_todo_list" + props.id;

  const [tasksArr, setTasksArr] = useState([]);

  useEffect(() => {
    let new_tasksArr = JSON.parse(localStorage.getItem(thisTasksArrName));
    if (new_tasksArr != null) {
      setTasksArr(new_tasksArr);
      task_num = localStorage.length;
    }
    let new_timedTasks = JSON.parse(localStorage.getItem(thisTimed_todo_list));
    if (new_timedTasks != null) {
      // for (let i = 0; i < new_timedTasks.length; i++) {
      //   for (let j = 0; j < timed_todo_list.length; j++) {
      //     if (timed_todo_list[j].time === new_timedTasks[i].time) {
      //       timed_todo_list[j].task = new_timedTasks[i].task[i];
      //       break;
      //     }
      //   }
      // }
      timed_todo_list = [...new_timedTasks];
      for (let i = 0; i < new_timedTasks.length; i++) {
        if (new_timedTasks[i].task.length > 0) {
          document.getElementById(new_timedTasks[i].time).innerHTML =
            new_timedTasks[i].task;
        }
      }
    }
  }, []);

  const addingTask = (task_str) => {
    const new_task = { id: Math.random().toString(), task: task_str };
    console.log(tasksArr);

    setTasksArr((prevTasksArr) => {
      return [...prevTasksArr, new_task];
    });

    localStorage.setItem(thisTasksArrName, JSON.stringify(tasksArr));
    console.log(`adding task: ${tasksArr.length}`);
    // console.log("task_num: " + task_num);
    task_num++;
  };

  const has_error = (if_has_error) => {
    props.detectError(if_has_error);
  };

  const goBackToCalendar = () => {
    props.goToCalendar();
  };

  const updateTimedTask = (time, event) => {
    console.log(time);
    console.log(timed_todo_list);
    //let new_timed_todo_list = JSON.parse(localStorage.getItem("timed_todo_list"));
    for (let i = 0; i < timed_todo_list.length; i++) {
      if (timed_todo_list[i].time === time) {
        timed_todo_list[i].task = event.target.value;
        console.log(timed_todo_list[i].task);
        console.log(timed_todo_list);
        break;
      }
    }
    localStorage.setItem(thisTimed_todo_list, JSON.stringify(timed_todo_list));
  };

  return (
    <div className="TodoPage">
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

      <div className="Back_btn">
        <button class="btn btn-primary " onClick={goBackToCalendar}>
          Back
        </button>
      </div>
    </div>
  );
};

export default TodoPage;
