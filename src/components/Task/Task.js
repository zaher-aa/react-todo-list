import React from "react";

const Task = (props) => {
  const {
    todoTxt,
    completed,
    id,
    tasksList,
    setTasksList,
    editable,
    setEditState,
    setDisplay,
  } = props;

  const deleteTaskHandler = () => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  const completedHandler = () => {
    setTasksList(
      tasksList.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  const setEnableHandler = () => {
    setTasksList(
      tasksList.map((task) => {
        return task.id === id ? { ...task, editable: true } : task;
      })
    );
    setDisplay(true);
    setEditState("Edit Enabled");
  };

  const updateTaskHandler = (e) => {
    if (e.key === "Enter") {
      setTasksList(
        tasksList.map((task) => {
          return task.id === id
            ? { ...task, value: e.target.textContent, editable: false }
            : task;
        })
      );
      setEditState("Task Updated");
      const editEnabledCount = tasksList.reduce(
        (acc, task) => (task.editable ? ++acc : acc),
        0
      );
      // if there are more than one task with
      //  contenteditable="true" then ->
      if (editEnabledCount > 1) {
        setTimeout(() => setEditState("Edit Enabled"), 1500);
        // otherwise ->
      } else setTimeout(() => setDisplay(false), 1500);
    }
  };

  return (
    <div className="todo">
      <li
        onKeyPress={updateTaskHandler}
        suppressContentEditableWarning={true}
        contentEditable={editable}
        className={`todo-item ${completed ? "completed" : ""}`}
      >
        {todoTxt}
      </li>
      <button onClick={setEnableHandler} className="edit-btn">
        <i className="far fa-edit"></i>
      </button>
      <button onClick={completedHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTaskHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Task;
