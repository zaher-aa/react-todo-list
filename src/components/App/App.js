import React, { useState, useEffect } from "react";
import "./App.css";
// Import Components
import Form from "../Form/Form";
import Tasks from "../Tasks/Tasks";

const App = () => {
  const [todoTxt, setTodoTxt] = useState("");
  const [tasksList, setTasksList] = useState([]);
  // Tasks status (all, completed, uncompleted)
  const [status, setStatus] = useState("all");
  // Array to store tasks that are in a specific status (all, completed, uncompleted)
  const [filteredTasks, setFilteredTasks] = useState([]);
  // editState (Edit Enabled, Task Updated)
  const [editState, setEditState] = useState("");
  // To display or hide the eidt status message
  const [display, setDisplay] = useState(false);

  // Load stored element when the component is mounted (loaded)
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasksList(storedTasks);
      // if there is any element with contenteditable="true" -> "Edit Enabled" message will appear
      const editEnabled = storedTasks.some((task) => task.editable);
      if (editEnabled) {
        setDisplay(true);
        setEditState("Edit Enabled");
      }
    }
  }, []);

  // Make these changes when a state ("status" or "tasksList" states) is changed
  useEffect(() => {
    // filter tasks based on the status (all, completed, uncompleted)
    switch (status) {
      case "completed":
        setFilteredTasks(tasksList.filter((task) => task.completed));
        break;
      case "uncompleted":
        setFilteredTasks(tasksList.filter((task) => !task.completed));
        break;
      default:
        setFilteredTasks(tasksList);
    }
    // Store tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }, [status, tasksList]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todoTxt={todoTxt}
        setTodoTxt={setTodoTxt}
        tasksList={tasksList}
        setTasksList={setTasksList}
        setStatus={setStatus}
      />
      <Tasks
        tasksList={tasksList}
        setTasksList={setTasksList}
        filteredTasks={filteredTasks}
        display={display}
        setDisplay={setDisplay}
        editState={editState}
        setEditState={setEditState}
      />
    </div>
  );
};

export default App;
