const UntimedTasks = (props) => {
  return (
    <ul>
      {props.untimedTasks.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
};

export default UntimedTasks;
