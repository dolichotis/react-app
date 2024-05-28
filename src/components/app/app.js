import { formatDistanceToNow } from 'date-fns';

import React, { Component } from 'react';

import '../../index.css';

import AppHeader from '../app-header/app-header';
import InputPanel from '../input-panel/input-panel';
import TodoList from '../todo-list/todo-list';
import Footer from '../footer/footer';

export default class App extends Component {
  maxId = 100;

  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        this.createTodoItem('Completed task'),
        this.createTodoItem('Make awesome app'),
        this.createTodoItem('Active  task'),
      ],
      value: '',
      filter: 'all',
    };
  }

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
        value: '',
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  onSubmit = (e) => {
    const { value } = this.state;

    e.preventDefault();
    this.addItem(value);
  };

  onValueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'completed':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  createTodoItem(value) {
    return {
      value,
      status: '',
      done: false,
      id: this.maxId++,
      createdAt: new Date(),
    };
  }

  render() {
    const { todoData, value, filter } = this.state;
    const leftCount = todoData.length - todoData.filter((el) => el.done).length;
    const visibleItems = this.filter(todoData, filter);

    return (
      <section className="todoapp">
        <form className="header" onSubmit={this.onSubmit}>
          <AppHeader />
          <InputPanel value={value} onValueChange={this.onValueChange} />
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
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </section>
    );
  }
}
