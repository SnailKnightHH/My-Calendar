import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sizebar";
import Dayslot from "./Components/Dayslot";
import Overallgrid from "./Components/OverallGrid";
import CalendarGrid from "./Components/CalendarGrid";
import TodoPage from "./Components/TodoPage";
import ErrorModel from "./Components/ErrorModel";
import React, { useState } from "react";

function App() {
  let all_slots = [
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
  ];

  const [error, setError] = useState(null);

  const detectError = (new_error) => {
    setError(new_error);
  };

  const clearError = () => {
    setError(null);
  };

  const [goToTasks, setGoToTasks] = useState(false);

  const switchToTaskLisks = () => {
    console.log("switchToTaskLisks triggered");
    setGoToTasks(true);
  };

  const switchToCalendar = () => {
    setGoToTasks(false);
  };

  let all_TodoPages = [
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="0"
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="1"
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="2"
    />,
  ];

  const [key, setkey] = useState(false);

  const getKeyOfDaySlot = (id) => {
    console.log(id);
    console.log(all_TodoPages[0]);
    setkey(id);
  };

  

  return (
    <Overallgrid>
      <Sidebar />
      {/* {!goToTasks && (
        <CalendarGrid
          all_slots={all_slots}
          switchToTaskLisks={switchToTaskLisks}
          goToTasks={goToTasks}
          error={error}
          detectError={detectError}
          switchToCalendar={switchToCalendar}
          clearError={clearError}
        />
      )} */}
      {!goToTasks && (
        <CalendarGrid
          all_slots={all_slots}
          switchToTaskLisks={switchToTaskLisks}
          goToTasks={goToTasks}
          error={error}
          detectError={detectError}
          switchToCalendar={switchToCalendar}
          clearError={clearError}
          getKeyOfDaySlot={getKeyOfDaySlot}
        />
      )}
      {goToTasks && all_TodoPages[key]}
      {error && <ErrorModel onConfirm={clearError} />}
    </Overallgrid>
  );
}
//props.goToTasks  props.error  props.detectError props.switchToCalendar props.clearError
export default App;
