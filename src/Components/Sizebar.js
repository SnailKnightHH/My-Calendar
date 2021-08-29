import "bootstrap/dist/css/bootstrap.css";
import "../css/sidebar.css";
import CalendarIcon from "../Image/calendar-check.svg";

const Sidebar = (props) => {
  const clearAllEntires = () => {
    localStorage.clear();
    alert("All Entries Cleared\nRefresh To See Changes");
  };

  const goToUserPage = () => {
    props.switchToUser(true);
  };

  const goToAboutPage = () => {
    props.switchToAbout(true);
  };

  const updateFirstDay = (event) => {
    props.updateDayNum(event.target.value - 1);
  };

  const MonthFinishedNum = (event) => {
    props.MonthFinished(event.target.value);
  };

  return (
    <nav className="sidebar">
      <img className="userImage" src={CalendarIcon} alt="Default" />
      <hr></hr>
      <ul className="sidebar-ul">
        <li>
          <h2 className="My-Todo_main_title">My-Todo</h2>
        </li>
        <li>
          <form>
            <label htmlFor="addTask" className="first_day_of_month">
              First day of month
            </label>
            <input
              id="First day of month"
              type="number"
              min="1"
              max="7"
              onChange={updateFirstDay}
            ></input>
          </form>
        </li>
        <li>
          <form>
            <label htmlFor="MonthFinished" className="month_finished">
              Months &nbsp; &nbsp;Finished
            </label>
            <input
              id="MonthFinished"
              type="number"
              onChange={MonthFinishedNum}
              className="monthFinishedBtn"
            ></input>
          </form>
        </li>
        <li className="sidebar-item">
          {" "}
          <button className="sidebar-btn" onClick={goToUserPage}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>{" "}
            User
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn" onClick={goToAboutPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bookmark-heart"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
              />
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
            </svg>{" "}
            About
          </button>
        </li>
        <li className="sidebar-item">
          {" "}
          <button className="sidebar-Clear-btn" onClick={clearAllEntires}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>{" "}
            Clear All Entries
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
