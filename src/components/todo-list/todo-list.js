import React, { Component } from "react";
import PropTypes from "prop-types";

import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

export default class TodoList extends Component {
  render() {
    const { todos, onDeleted, onToggleDone } = this.props;

    const elements = todos.map((item) => {
      const { id } = item;

      return (
        <TodoListItem
          key={id}
          {...item}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};
