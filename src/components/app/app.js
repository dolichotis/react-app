import React, {Component} from "react";

import './app.css'

import AppHeader from "../app-header/app-header";
import InputPanel from "../input-panel/input-panel";
import TodoList from "../todo-list/todo-list";
import Filter from "../filters/filters";
import Footer from "../footer/footer";

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Make awesome app'),
      this.createTodoItem('Active  task')
    ],
    value: ''
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem]

      return {
        todoData: newArr,
        value: ''
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      }
    })
  }

  createTodoItem(value) {
    return {
      value,
      status: '',
      done: false,
      id: this.maxId++
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.addItem(this.state.value);
  }

  onValueChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const leftCount = this.state.todoData.length -
      this.state.todoData.filter((el) => el.done).length;

    return (
      <section className="todoapp">
        <form className="header" onSubmit={this.onSubmit}>
          <AppHeader/>
          <InputPanel value={this.state.value}
                      onValueChange={this.onValueChange}/>
        </form>

        <section className="main">
          <TodoList todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}/>
          <Footer leftCount={leftCount}/>
        </section>

      </section>
    );
  }

};