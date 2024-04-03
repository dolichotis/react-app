import { formatDistanceToNow } from "date-fns";

import React, { Component } from "react";

import "./app.css";

import AppHeader from "../app-header/app-header";
import InputPanel from "../input-panel/input-panel";
import TodoList from "../todo-list/todo-list";
import Footer from "../footer/footer";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Completed task"),
      this.createTodoItem("Make awesome app"),
      this.createTodoItem("Active  task"),
    ],
    value: "",
    filter: "all",
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  deleteAllItems = () => {
    this.setState({
      todoData: [],
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
        value: "",
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  createTodoItem(value) {
    return {
      value,
      status: "",
      done: false,
      id: this.maxId++,
      createdAt: new Date(),
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.addItem(this.state.value);
  };

  onValueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "completed":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const leftCount =
      this.state.todoData.length -
      this.state.todoData.filter((el) => el.done).length;

    const visibleItems = this.filter(this.state.todoData, this.state.filter);

    return (
      <section className="todoapp">
        <form className="header" onSubmit={this.onSubmit}>
          <AppHeader />
          <InputPanel
            value={this.state.value}
            onValueChange={this.onValueChange}
          />
        </form>

        <section className="main">
          <TodoList
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            todos={visibleItems.map((todo) => ({
              ...todo,
              createdAt: formatDistanceToNow(new Date(todo.createdAt), {
                addSuffix: true,
              }),
            }))}
          />
          <Footer
            leftCount={leftCount}
            deleteAllItems={this.deleteAllItems}
            filter={this.state.filter}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </section>
    );
  }
}
