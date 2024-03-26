import React, {Component} from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {

  render() {
    const {
      value, status,
      id, onDeleted,
      onToggleDone, done,
      createdAt
    } = this.props;

    let classNames = '';
    let checked = false;
    if (done) {
      classNames += ' completed';
      checked = true;
    }

    const inputEdit = <input type="text" className="edit" defaultValue="Editing task"/>;

    return (
      <li key={id} className={classNames}>
        <div className="view">
          <input id={id} className="toggle" type="checkbox"
                 onChange={() => onToggleDone(id)}
                 defaultChecked={checked}/>
          <label htmlFor={id}>
            <span className='description'>
              {value}
            </span>
            <span className="created">created {createdAt}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {(status === 'editing') ? inputEdit : ''}
      </li>
    )
  }
}
