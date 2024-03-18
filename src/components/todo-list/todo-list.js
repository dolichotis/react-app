import React, {Component} from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

export default class TodoList extends Component {

  render() {
    const {todos, onDeleted} = this.props;

    const elements = todos.map(item => {
      const {id, value, status, ...props} = item;

      return (
        <TodoListItem {...item} onDeleted={() => onDeleted(id)}/>
      )
    })

    return (
      <ul className="todo-list">
        {elements}
      </ul>
    )
  }
}
//
// const TodoList1 = ({todos}) => {
//
//   const elements = todos.map(item => {
//     const {value, status, id, ...props} = item;
//     const inputEdit = <input type="text" className="edit" defaultValue="Editing task" />;
//
//     return (
//       <li key={item.id} className={status}>
//         <TodoListItem {...item}/>
//         {(status === 'editing') ? inputEdit : ''}
//       </li>
//     )
//   })
//
//   return (
//     <ul className="todo-list">
//       {elements}
//     </ul>
//   )
// }
//
// export default TodoList1;