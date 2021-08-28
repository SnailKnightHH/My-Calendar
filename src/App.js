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
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 1, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
    { day_num: 0, task_num: 0, finished_num: 0 },
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

  const [goToUser, setGoToUser] = useState(false);

  const userCalendarSwitch = (ifRender) => {
    setGoToUser(ifRender);
    if (!(!goToTasks && !goToUser && !goToAbout)) {
      setGoToAbout(!ifRender);
    }
  };

  const [goToAbout, setGoToAbout] = useState(false);

  const AboutCalendarSwitch = (ifRender) => {
    setGoToAbout(ifRender);
    if (!(!goToTasks && !goToUser && !goToAbout)) {
      setGoToUser(ifRender);
    }
  };

  const UserAboutSwitch = (ifRender) => {
    setGoToAbout(ifRender);
    setGoToUser(!ifRender);
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
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="3"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="4"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="5"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="6"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="7"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="8"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="9"
      updat9eSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="10"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="11"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="12"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="13"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="14"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="15"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="16"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="17"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="18"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="19"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="20"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="21"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="22"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="23"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="24"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="25"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="26"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="27"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="28"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="29"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="30"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="31"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="32"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
      id="33"
      updateSlotInfo={updateSlotInfo}
    />,
    <TodoPage
      detectError={detectError}
      goToCalendar={switchToCalendar}
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
      <Sidebar
        switchToUser={userCalendarSwitch}
        switchToAbout={AboutCalendarSwitch}
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
      {goToUser && !goToAbout && <User goBack={userCalendarSwitch} />}
      {goToAbout && !goToUser && <AboutPage />}
    </Overallgrid>
  );
}
//props.goToTasks  props.error  props.detectError props.switchToCalendar props.clearError
export default App;
