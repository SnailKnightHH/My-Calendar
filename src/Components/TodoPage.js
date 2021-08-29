import React, { useState, useEffect } from "react";
import UntimedTasks from "./UntimedTasks";
import AddUntimedTask from "./AddUntimedTask";
import TimedTasks from "./TimedTasks";
import useDidMountEffect from "./useDidMountEffect";
import "../css/TodoPage.css";
import "bootstrap/dist/css/bootstrap.css";


const TodoPage = (props) => {
  const [timedTasksId, setTimedTasksId] = useState(0);
  const [timed_task_num, setTimed_task_num] = useState(0);
  const [untimed_task_num, setUntimed_task_num] = useState(0);
  const [finished_task_num, setFinished_task_num] = useState(0);
  const [finished_untimed_task_num, setFinished_untimed_task_num] = useState(0);

  const [timed_todo_list, setTimed_todo_list] = useState([
    { time: "05:00", task: "", finished: false },
    { time: "06:00", task: "", finished: false },
    { time: "07:00", task: "", finished: false },
    { time: "08:00", task: "", finished: false },
    { time: "09:00", task: "", finished: false },
    { time: "10:00", task: "", finished: false },
    { time: "11:00", task: "", finished: false },
    { time: "12:00", task: "", finished: false },
    { time: "13:00", task: "", finished: false },
    { time: "14:00", task: "", finished: false },
    { time: "15:00", task: "", finished: false },
    { time: "16:00", task: "", finished: false },
    { time: "17:00", task: "", finished: false },
    { time: "18:00", task: "", finished: false },
    { time: "19:00", task: "", finished: false },
    { time: "20:00", task: "", finished: false },
    { time: "21:00", task: "", finished: false },
    { time: "22:00", task: "", finished: false },
    { time: "23:00", task: "", finished: false },
    { time: "24:00", task: "", finished: false },
    { time: "01:00", task: "", finished: false },
    { time: "02:00", task: "", finished: false },
    { time: "03:00", task: "", finished: false },
    { time: "04:00", task: "", finished: false },
  ]);

  const updateTaskNum = () => {
    let timed_task_num_local = 0;
    for (let i = 0; i < timed_todo_list.length; i++) {
      if (timed_todo_list[i].task !== "") {
        timed_task_num_local++;
      }
    }
    return timed_task_num_local;
  };

  const thisTasksArrName = "tasksArr" + props.id;
  const thisTimed_todo_list = "timed_todo_list" + props.id;

  const [tasksArr, setTasksArr] = useState([]);

  useEffect(() => {
    let finished_num = 0;
    let new_tasksArr = JSON.parse(localStorage.getItem(thisTasksArrName));
    if (new_tasksArr != null) {
      setTasksArr(new_tasksArr);
      setUntimed_task_num(new_tasksArr.length);

      for (let item of new_tasksArr) {
        if (item.finished) {
          finished_num++;
        }
      }
    }

    let new_timedTasks = JSON.parse(localStorage.getItem(thisTimed_todo_list));
    let temp = 0;

    if (new_timedTasks != null) {
      setTimed_todo_list([...new_timedTasks]);

      for (let i = 0; i < new_timedTasks.length; i++) {
        if (new_timedTasks[i].task.length > 0) {
          document.getElementById(new_timedTasks[i].time).innerHTML =
            new_timedTasks[i].task;
        }
      }

      for (let i = 0; i < new_timedTasks.length; i++) {
        if (new_timedTasks[i].finished) {
          temp++;
          finished_num++;
        }
      }

      setTimed_task_num(temp);

      for (let slot of new_timedTasks) {
        if (slot.finished) {
          document.getElementById("checkbox" + slot.time).checked = true;
        }
      }
    }

    props.updateSlotInfo(untimed_task_num + temp, finished_num, props.id);
  }, []);

  const addingTask = (task_str) => {
    const new_task = {
      id: timedTasksId,
      task: task_str,
      finished: false,
    };
    setTimedTasksId((prevID) => prevID + 1);
    setTasksArr((prevTasksArr) => {
      return [...prevTasksArr, new_task];
    });
  };

  useDidMountEffect(() => {
    localStorage.setItem(thisTasksArrName, JSON.stringify(tasksArr));
    setUntimed_task_num(tasksArr.length);
    // FOR SOME REASON untimed_task_num IS NOT UPDATED IMMEDIATELY
    // props.updateSlotInfo(
    //   tasksArr.length + timed_task_num,
    //   finished_task_num,
    //   props.id
    // );
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
    setTimedTasksId(0);
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
    props.updateSlotInfo(
      timed_task_num + untimed_task_num,
      finished_task_num,
      props.id
    );
  };

  const updateFinishedTimed = (id) => {
    if (document.getElementById(id) != null) {
      if (document.getElementById(id).checked) {
        setFinished_task_num(
          (prevFinished_task_num) => prevFinished_task_num + 1
        );
        props.updateSlotInfo(
          timed_task_num + untimed_task_num,
          finished_task_num + 1,
          props.id
        );
        const whichCheckBox = id.substr(8);
        for (let slot of timed_todo_list) {
          if (slot.time === whichCheckBox) {
            slot.finished = true;
            setTimed_todo_list(timed_todo_list);
            localStorage.setItem(
              thisTimed_todo_list,
              JSON.stringify(timed_todo_list)
            );
            break;
          }
        }
      } else {
        setFinished_task_num(
          (prevFinished_task_num) => prevFinished_task_num - 1
        );
        props.updateSlotInfo(
          timed_task_num + untimed_task_num,
          finished_task_num - 1,
          props.id
        );
        const whichCheckBox = id.substr(8);
        for (let slot of timed_todo_list) {
          if (slot.time === whichCheckBox) {
            slot.finished = false;
            setTimed_todo_list(timed_todo_list);
            localStorage.setItem(
              thisTimed_todo_list,
              JSON.stringify(timed_todo_list)
            );
            break;
          }
        }
      }
    }
  };

  const updateFinishedUntimed = (id) => {
    if (document.getElementById(id) != null) {
      if (document.getElementById(id).checked) {
        setFinished_untimed_task_num(
          (prevFinished_task_num) => prevFinished_task_num + 1
        );
      } else {
        setFinished_task_num(
          (prevFinished_task_num) => prevFinished_task_num - 1
        );
      }
      props.updateSlotInfo(
        timed_task_num + untimed_task_num,
        finished_untimed_task_num + 1,
        props.id
      );
      tasksArr[id[15]].finished = true;
      localStorage.setItem(thisTasksArrName, JSON.stringify(tasksArr));
      setTasksArr(tasksArr);
    }
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
          updateFinished={updateFinishedTimed}
        />

        <div>
          <AddUntimedTask addTask={addingTask} detectError={has_error} />
          <UntimedTasks
            untimedTasks={tasksArr}
            updateFinished={updateFinishedUntimed}
          />
        </div>
      </div>

      <div className="buttons">
        <button className="btn btn-primary Back_btn" onClick={goBackToCalendar}>
          Back
        </button>
        <button className="btn btn-danger clear_btn" onClick={clearThisEntry}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoPage;
