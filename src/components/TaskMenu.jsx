import { useState } from "react";
import closeIcon from "../images/close_icon.svg";

const TaskMenu = (props) => {
  const [tempTaskData, setTempTaskData] = useState({
    taskTitle: props.title,
    taskId: props.id,
  });
  const handleCloseIcon = () => {
    props.setMenuExpanded(!props.menuExpanded);
  };

  return (
    <div className={`task-menu ${props.menuExpanded && "task-menu-expanded"}`}>
      <img
        className="close-icon"
        onClick={handleCloseIcon}
        src={closeIcon}
        alt=""
      />
      <input type="text" value={tempTaskData.taskTitle} />
      <textarea name="" id="" cols="30" rows="10" placeholder="Add a task description"></textarea>
    </div>
  );
};

export default TaskMenu;
