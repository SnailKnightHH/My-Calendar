import React, { useEffect } from "react";
import "../css/user.css";

const User = (props) => {
  const all_ids = ["UserName", "Region", "Goals", "ThoughtSketch"];

  const recordInput = (id, event) => {
    localStorage.setItem(id, event.target.value);
  };

  useEffect(() => {
    for (let id of all_ids) {
      const item_fetched = localStorage.getItem(id);
      if (item_fetched != null) {
        document.getElementById(id).value = item_fetched;
      }
    }
  }, []);

  const backToCalendar = () => {
    props.goBack();
  };

  const clearUserData = () => {
    for (let id of all_ids) {
      localStorage.removeItem(id);
    }
    alert("User Data Cleared\nRefresh To See Changes");
  };

  return (
    <section className="UserPage">
      <h1>User</h1>
      <form className="userPageGrid">
        <label for="UserName">User Name</label>
        <input
          type="text"
          name="UserName"
          id="UserName"
          className="userInputField"
          onChange={(e) => recordInput("UserName", e)}
        />
        <label for="Region">Region</label>
        <input
          type="text"
          name="Region"
          id="Region"
          className="userInputField"
          onChange={(e) => recordInput("Region", e)}
        />
        <label for="Goals" className="UserPageEntity">
          Goals
        </label>
        <textarea
          name="Goals"
          id="Goals"
          cols="40"
          rows="4"
          className="userTextArea UserPageEntity"
          onChange={(e) => recordInput("Goals", e)}
        ></textarea>
        <label for="ThoughtSketch" className="UserPageEntity">
          Thought Sketch
        </label>
        <textarea
          name="ThoughtSketch"
          id="ThoughtSketch"
          cols="40"
          rows="4"
          className="userTextArea UserPageEntity"
          onChange={(e) => recordInput("ThoughtSketch", e)}
        ></textarea>
        <button
          className="btn btn-primary UserPageBtn"
          onClick={backToCalendar}
        >
          Back
        </button>
        <button className="btn btn-primary UserPageBtn" onClick={clearUserData}>
          Clear
        </button>
      </form>
    </section>
  );
};

export default User;
