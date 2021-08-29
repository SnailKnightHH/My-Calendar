const UntimedTasks = (props) => {
  return (
    <ul>
      {props.untimedTasks.map((task) => (
        <li key={task.id}>
          {task.task}{" "}
          <span>
            <input
              type="checkbox"
              name={"checkboxuntimed" + task.id}
              id={"checkboxuntimed" + task.id}
              onClick={() => props.updateFinished("checkboxuntimed" + task.id)}
              className="checkbox"
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default UntimedTasks;
