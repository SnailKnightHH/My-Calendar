import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./Components/Sizebar";
import Dayslot from "./Components/Dayslot";
import Overallgrid from "./Components/OverallGrid";
import CalendarGrid from "./Components/CalendarGrid";

let all_slots = [
  { day_num: 0, task_num: 0, finished_num: 0 },
  { day_num: 0, task_num: 0, finished_num: 0 },
];

ReactDOM.render(
  <React.StrictMode>
    <Overallgrid>
      <Sidebar />
      <CalendarGrid all_slots={all_slots} />
    </Overallgrid>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
