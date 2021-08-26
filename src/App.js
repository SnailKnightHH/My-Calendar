import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sizebar";
import Dayslot from "./Components/Dayslot";
import Overallgrid from "./Components/OverallGrid";
import CalendarGrid from "./Components/CalendarGrid";
import TodoPage from "./Components/TodoPage";
import ErrorModel from "./Components/ErrorModel";
import React, { useState, useEffect } from "react";

function App() {
  const [allSlots, setAllSlots] = useState([
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
  ]);

  const [error, setError] = useState(null);

  const detectError = (new_error) => {
    setError(new_error);
  };

  const clearError = () => {
    setError(null);
  };

  const [goToTasks, setGoToTasks] = useState(false);

  const switchToTaskLisks = (ifRender) => {
    setGoToTasks(ifRender);
  };

  const switchToCalendar = () => {
    setGoToTasks(false);
  };

  const updateSlotInfo = (task_num, finished_num, id) => {
    let newAllSlots = [...allSlots];
    newAllSlots[id].task_num = task_num;
    newAllSlots[id].finished_num = finished_num;
    setAllSlots(newAllSlots);
  };

  let all_TodoPages = [
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="0"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="1"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="2"
      updateSlotInfo={updateSlotInfo}
    />,
  ];

  const [key, setkey] = useState(false);

  const getKeyOfDaySlot = (id) => {
    setkey(id);
  };

  // useEffect(() => {
  //   console.log("I'm here");
  //   for (let i = 0; i < all_TodoPages.length; i++) {
  //     setGoToTasks(true);
  //     // <TodoPage
  //     //   detectError={detectError}
  //     //   goToCalendar={switchToCalendar}
  //     //   id={key}
  //     //   updateSlotInfo={updateSlotInfo}
  //     // />;
  //    // all_TodoPages[key];
  //       setkey((prevKey) => prevKey + 1);
  //       setGoToTasks(false);
  //   }
  // }, []);

  return (
    <Overallgrid>
      <Sidebar />
      {!goToTasks && (
        <CalendarGrid
          all_slots={allSlots}
          switchToTaskLisks={switchToTaskLisks}
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
