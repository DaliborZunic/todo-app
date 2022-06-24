import "../styles/main.scss";
import { v4 as uuid } from "uuid";

const CreateTaskForm = (props) => {
  const handleTitleChange = (e) => {
    props.setCurrentTask((prevValues) => {
      return { ...prevValues, taskTitle: e.target.value };
    });
  };

  const createTask = () => {
    props.setCurrentTask((prevValues) => {
      return { ...prevValues, taskId: uuid() };
    });
    if (props.currentTask.taskTitle) {
      props.setAllTasks((prevValues) => [...prevValues, props.currentTask]);
      props.setCurrentTask((prevValues) => {
        return { ...prevValues, taskTitle: "" };
      });
    }
  };

  return (
    <div className="CreateTaskForm">
      <input
        className="title-input"
        type="text"
        placeholder="Add a task..."
        onChange={handleTitleChange}
        value={props.currentTask.taskTitle}
      />
      <button onClick={createTask} className="add-task-button">
        +
      </button>
    </div>
  );
};

export default CreateTaskForm;
