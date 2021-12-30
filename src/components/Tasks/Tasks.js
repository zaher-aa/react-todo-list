import React from "react";
import "./Tasks.css";
// Import Components
import Task from "../Task/Task";
import EditStatus from "../EditStatus/EditStatus";

const Tasks = (props) => {
  const {
    tasksList,
    setTasksList,
    filteredTasks,
    editState,
    setEditState,
    display,
    setDisplay,
  } = props;

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTasks.map((task) => {
          return (
            <Task
              key={task.id}
              setTasksList={setTasksList}
              tasksList={tasksList}
              todoTxt={task.value}
              completed={task.completed}
              id={task.id}
              editable={task.editable}
              setEditState={setEditState}
              setDisplay={setDisplay}
            />
          );
        })}
      </ul>
      {/* If "display" is true -> status message will appear */}
      {display && <EditStatus editState={editState} />}
    </div>
  );
};

export default Tasks;
