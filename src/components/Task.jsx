import { useState } from "react";
import taskMenu from "../images/task_menu.svg";

const Task = (props) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };
  return (
    <div className="Task">
      <div className="task-title">{props.title}</div>
      <div className="task-menu-icon" onClick={toggleMenu}>
        <img onClick={toggleMenu} src={taskMenu} alt="" />
      </div>
      <div
        className={`task-menu ${menuExpanded && "task-menu-expanded"}`}
      >
        <div className="task-title">{props.title}</div>
      </div>
    </div>
  );
};

export default Task;
