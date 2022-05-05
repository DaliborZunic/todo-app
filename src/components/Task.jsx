import { useState } from "react";
import taskMenuIcon from "../images/task_menu.svg";
import TaskMenu from "./TaskMenu";

const Task = (props) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };
  return (
    <div className="Task">
      <div className="task-title">{props.title}</div>
      <div className="task-menu-icon" onClick={toggleMenu}>
        <img onClick={toggleMenu} src={taskMenuIcon} alt="" />
      </div>
      <TaskMenu menuExpanded = {menuExpanded} setMenuExpanded = {setMenuExpanded} id={props.id} title = {props.title} />
    </div>
  );
};

export default Task;
