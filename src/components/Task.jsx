import { useState } from "react";
import taskMenuIcon from "../images/task_menu.svg";
import TaskMenu from "./TaskMenu";

const Task = (props) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  const handleTaskDoneClick = () => {
    const index = props.allTasks.map((task) => task.taskId).indexOf(props.id);
    const tempTasks = props.allTasks
    tempTasks[index] = {...tempTasks[index], taskDone: !tempTasks[index].taskDone}
    tempTasks.splice(index, 1, tempTasks[index])
    props.setAllTasks([...tempTasks])
  }

  return (
    <div className="Task">
      <div className={`task-done-icon ${props.taskDone && "task-done-icon-checked"}`} onClick={handleTaskDoneClick}></div>
      <div className="task-data">
        <div className="task-title">{props.title}</div>
        {props.description && (
          <div className="task-description">{props.description}</div>
        )}
      </div>

      <div className="task-menu-icon" onClick={toggleMenu}>
        <img onClick={toggleMenu} src={taskMenuIcon} alt="" />
      </div>
      <TaskMenu
        menuExpanded={menuExpanded}
        setMenuExpanded={setMenuExpanded}
        id={props.id}
        title={props.title}
        description={props.description}
        allTasks={props.allTasks}
        setAllTasks={props.setAllTasks}
      />
    </div>
  );
};

export default Task;
