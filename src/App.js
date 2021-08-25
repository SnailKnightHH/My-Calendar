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
    setGoToTasks(true);
  };

  const switchToCalendar =() => {
    setGoToTasks(false);
  }

  return (
    <React.Fragment>
      <Overallgrid>
        <Sidebar />
        {!goToTasks && (
          <CalendarGrid
            all_slots={all_slots}
            switchToTaskLisks={switchToTaskLisks}
          />
        )}
        {goToTasks && <TodoPage detectError={detectError} goToCalendar={switchToCalendar}/>}
        {error && <ErrorModel onConfirm={clearError} />}
      </Overallgrid>
    </React.Fragment>
  );
}

export default App;
