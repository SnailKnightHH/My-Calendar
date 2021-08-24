import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const AddUntimedTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (enteredTask.trim().length === 0) {
      console.log("arrived");
      props.detectError("Empty Input");
      return;
    }
    props.addTask(enteredTask);
    setEnteredTask("");
  };

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <form onSubmit={addTaskHandler}>
      <label htmlFor="addTask">Task</label>
      <input
        id="addTask"
        type="text"
        value={enteredTask}
        onChange={taskChangeHandler}
      ></input>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddUntimedTask;
