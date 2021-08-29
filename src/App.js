import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sizebar";
import Dayslot from "./Components/Dayslot";
import Overallgrid from "./Components/OverallGrid";
import CalendarGrid from "./Components/CalendarGrid";
import TodoPage from "./Components/TodoPage";
import ErrorModel from "./Components/ErrorModel";
import WeekdaysBar from "./Components/WeekdaysBar";
import User from "./Components/User";
import AboutPage from "./Components/AboutPage";
import React, { useState, useEffect } from "react";

function App() {
  const [allSlots, setAllSlots] = useState([
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
    { day_num: "#", task_num: 0, finished_num: 0 },
  ]);

  useEffect(() => {
    const month_finished_num = localStorage.getItem("MonthFinished");
    if (month_finished_num != null) {
      document.getElementById("MonthFinished").value = month_finished_num;
    }
  }, []);

  const updateDayNum = (startidx) => {
    if (startidx < 0 || startidx > 4) {
      alert("Invalid Number");
      return;
    }
    let day_num_local = 1;
    let temp_all_slots = [...allSlots];
    for (let i = 0; i < startidx; i++) {
      temp_all_slots[i].day_num = "#";
    }
    for (let i = startidx; i < startidx + 31; i++) {
      temp_all_slots[i].day_num = day_num_local;
      day_num_local++;
    }
    for (let i = startidx + 31; i < temp_all_slots.length; i++) {
      temp_all_slots[i].day_num = "#";
    }
    setAllSlots(temp_all_slots);
  };

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

  const [goToUser, setGoToUser] = useState(false);

  const userCalendarSwitch = (ifRender) => {
    setGoToUser(ifRender);
    setGoToAbout(false);
    setGoToTasks(false);
  };

  const [goToAbout, setGoToAbout] = useState(false);

  const AboutCalendarSwitch = (ifRender) => {
    setGoToAbout(ifRender);
    setGoToUser(false);
    setGoToTasks(false);
  };

  const switchToCalendarFromTasks = () => {
    setGoToTasks(false);
  };

  const switchToCalendarFromUser = () => {
    setGoToUser(false);
  };

  const switchToCalendarFromAbout = () => {
    setGoToAbout(false);
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
      goToCalendar={switchToCalendarFromTasks}
      id="0"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="1"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="2"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="3"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="4"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="5"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="6"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="7"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="8"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="9"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="10"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="11"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="12"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="13"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="14"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="15"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="16"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="17"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="18"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="19"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="20"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="21"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="22"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="23"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="24"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="25"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="26"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="27"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="28"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="29"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="30"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="31"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="32"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="33"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendarFromTasks}
      id="34"
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
  //     //   goToCalendar={switchToCalendarFromTasks}
  //     //   id={key}
  //     //   updateSlotInfo={updateSlotInfo}
  //     // />;
  //    // all_TodoPages[key];
  //       setkey((prevKey) => prevKey + 1);
  //       setGoToTasks(false);
  //   }
  // }, []);

  const MonthFinished = (num) => {
    localStorage.setItem("MonthFinished", num);
  };

  return (
    <Overallgrid>
      <Sidebar
        switchToUser={userCalendarSwitch}
        switchToAbout={AboutCalendarSwitch}
        updateDayNum={updateDayNum}
        MonthFinished={MonthFinished}
      />
      {!goToTasks && !goToUser && !goToAbout && (
        <CalendarGrid
          all_slots={allSlots}
          switchToTaskLisks={switchToTaskLisks}
          getKeyOfDaySlot={getKeyOfDaySlot}
        />
      )}
      {goToTasks && all_TodoPages[key]}
      {/* {goToTasks && all_TodoPages[9]} */}
      {error && <ErrorModel onConfirm={clearError} />}
      {goToUser && !goToAbout && <User goBack={switchToCalendarFromUser} />}
      {goToAbout && !goToUser && (
        <AboutPage goBack={switchToCalendarFromAbout} />
      )}
    </Overallgrid>
  );
}
//props.goToTasks  props.error  props.detectError props.switchToCalendar props.clearError
export default App;
