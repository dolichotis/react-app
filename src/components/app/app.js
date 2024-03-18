import React, {Component} from "react";

import './app.css'

import AppHeader from "../app-header/app-header";
import InputPanel from "../input-panel/input-panel";
import TodoList from "../todo-list/todo-list";
import Filter from "../filters/filters";
import Footer from "../footer/footer";
import ItemAddForm from "../itemAddForm/itemAddForm";

export default class App extends Component {

  maxId = 100;

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

  addItem = (text) => {
    const newItem = {
      value: text,
      status: '',
      id: this.maxId + 1
    }

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem]

      return {
        todoData: newArr
      }
    })
  }


  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <AppHeader/>
          <InputPanel addItem={this.addItem}/>
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