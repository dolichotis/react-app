import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = ({todos}) => {

  const elements = todos.map(item => {
    const {value, status, ...props} = item;
    const inputEdit = <input type="text" className="edit" value="Editing task" />;

    return (
      <li className={status}>
        <TodoListItem {...item}/>
        {(status === 'editing') ? inputEdit : ''}
      </li>
    )
  })

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  )
}

export default TodoList;