import { useState } from "react";
import UntimedTasks from "./UntimedTasks";
import AddUntimedTask from "./AddUntimedTask";
import "../css/TodoPage.css";

const timed_todo_list = [
  { time: "05:00", task: "" },
  { time: "05:00", task: "" },
];

const TodoPage = (props) => {
  const [tasksArr, setTasksArr] = useState([]);

  const addingTask = (task_str) => {
    setTasksArr((prevArr) => [
      ...prevArr,
      { id: Math.random().toString(), task: task_str },
    ]);
  };

  const has_error = (if_has_error) => {
    props.detectError(if_has_error);
  };

  return (
    <div className="TodoPage">
      <ul className="Timed_ul">
        <li>
          05:00{" "}
          <textarea
            name="0500"
            id="0500"
            cols="20"
            rows="2"
            placeholder="Tasks"
            className="Timed_text_area"
          ></textarea>
        </li>
        <li>
          06:00{" "}
          <textarea
            name="0500"
            id="0500"
            cols="20"
            rows="2"
            placeholder="Tasks"
            className="Timed_text_area"
          ></textarea>
        </li>
      </ul>

      <div>
        <AddUntimedTask addTask={addingTask} detectError={has_error} />
        <UntimedTasks untimedTasks={tasksArr} />
      </div>
    </div>
  );
};

export default TodoPage;
