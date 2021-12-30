import React from "react";
import "./Form.css";
// Random ID Package
import { nanoid } from "nanoid";

const Form = (props) => {
  const { todoTxt, setTodoTxt, tasksList, setTasksList, setStatus } = props;
  const todoTxtHandler = (e) => setTodoTxt(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    if (todoTxt.trim() !== "") {
      setTasksList([
        ...tasksList,
        {
          completed: false,
          value: todoTxt,
          id: nanoid(15),
          editable: false,
        },
      ]);
      setTodoTxt("");
    }
  };

  const statusHandler = (e) => setStatus(e.target.value);

  return (
    <div>
      <form>
        <input
          onInput={todoTxtHandler}
          value={todoTxt}
          type="text"
          className="todo-input"
        />
        <button onClick={addTask} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
