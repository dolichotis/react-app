import React from "react";

import './app.css'

import AppHeader from "../app-header/app-header";
import InputPanel from "../input-panel/input-panel";
import TodoList from "../todo-list/todo-list";
import Filter from "../filters/filters";
import Footer from "../footer/footer";

const App = () => {
  const todoData = [
    {value: 'Completed task', status: 'completed', id: 1},
    {value: 'Make awesome app', status: 'editing', id: 2},
    {value: 'Active  task', status: '', id: 3}
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <AppHeader/>
        <InputPanel/>
      </header>

      <section className="main">
        <TodoList todos={todoData}/>
        <Footer/>
      </section>

    </section>
  );
};

export default App;