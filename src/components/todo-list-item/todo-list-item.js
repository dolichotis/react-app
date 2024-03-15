import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({value}) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox"/>
      <label>
        <span className="description">{value}</span>
        <span className="created">created 17 seconds ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  )
}

export default TodoListItem;