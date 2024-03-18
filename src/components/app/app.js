import React, {Component} from "react";

import './app.css'

import AppHeader from "../app-header/app-header";
import InputPanel from "../input-panel/input-panel";
import TodoList from "../todo-list/todo-list";
import Filter from "../filters/filters";
import Footer from "../footer/footer";

export default class App extends Component {

  state = {
    todoData: [
      {value: 'Completed task', status: 'completed', id: 1},
      {value: 'Make awesome app', status: 'editing', id: 2},
      {value: 'Active  task', status: '', id: 3}
    ]
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

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <AppHeader/>
          <InputPanel/>
        </header>

        <section className="main">
          <TodoList todos={this.state.todoData}
                    onDeleted={this.deleteItem}/>
          <Footer/>
        </section>

      </section>
    );
  }


};