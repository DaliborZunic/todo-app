import { useEffect, useState } from "react";
import closeIcon from "../images/close_icon.svg";

const TaskMenu = (props) => {
  const [tempTaskData, setTempTaskData] = useState({
    taskTitle: props.title,
    taskDescription: props.description,
    taskId: props.id,
  });
  const handleCloseIcon = () => {
    props.setMenuExpanded(!props.menuExpanded);
  };

  const handleTitleChange = (e) => {
    setTempTaskData((prevValues) => {
      return {
        ...prevValues,
        taskTitle: e.target.value,
      };
    });
  };

  const handleDescriptionChange = (e) => {
    setTempTaskData((prevValues) => {
      return {
        ...prevValues,
        taskDescription: e.target.value,
      };
    });
  };

  const handleSaveChange = () => {
    const index = props.allTasks.map((task) => task.taskId).indexOf(props.id);
    const tempTasks = props.allTasks
    tempTasks.splice(index, 1, tempTaskData)
    props.setAllTasks([...tempTasks])
    props.setMenuExpanded(!props.menuExpanded)
  };

  useEffect(() => {
    console.log(tempTaskData);
  }, [tempTaskData]);

  return (
    <div className={`task-menu ${props.menuExpanded && "task-menu-expanded"}`}>
      <img
        className="close-icon"
        onClick={handleCloseIcon}
        src={closeIcon}
        alt=""
      />
      <input
        type="text"
        onChange={handleTitleChange}
        value={tempTaskData.taskTitle}
      />
      <textarea
        onChange={handleDescriptionChange}
        value={tempTaskData.taskDescription}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Add a task description"
      ></textarea>
      <button onClick={handleSaveChange}>Save changes</button>
    </div>
  );
};

export default TaskMenu;
