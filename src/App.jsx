import { useEffect, useState } from "react";
import CreateTaskForm from "./components/CreateTaskForm";
import TaskContainer from "./components/TaskContainer";
import "./styles/main.scss";
import { v4 as uuid } from 'uuid';

const App = () => {
  const [currentTask, setCurrentTask] = useState({
    taskTitle: "",
    taskDescription: "",
    taskId: uuid()
  });
  const [allTasks, setAllTasks] = useState([]);

  useEffect( () => {
    console.log(allTasks);
  }, [allTasks] )

  return (
    <div className="App">
      <div className="container">
        <CreateTaskForm
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        />
        <TaskContainer allTasks={allTasks} setAllTasks={setAllTasks} />
      </div>
    </div>
  );
};

export default App;
