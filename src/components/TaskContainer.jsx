import React from "react";
import Task from "./Task";
import sloth from "../images/sloth.png"

const TaskContainer = (props) => {
  return (
    <div className="TaskContainer">
      {
        props.allTasks.length === 0 && <img className="sloth" src={sloth} alt="" />
      }
      {props.allTasks.map((task) => (
        <Task key={task.taskId} id={task.taskId} title={task.taskTitle} description={task.taskDescription} taskDone={task.taskDone} allTasks={props.allTasks} setAllTasks={props.setAllTasks} />
      ))}
    </div>
  );
};

export default TaskContainer;
