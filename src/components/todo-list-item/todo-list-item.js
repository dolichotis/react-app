import React, {Component} from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false
  }

  onValueClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  }

  render() {
    const {value, status, id, onDeleted} = this.props;
    const {done} = this.state;

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
          <input className="toggle" type="checkbox" onClick={this.onValueClick} defaultChecked={checked}/>
          <label>
            <span className='description' onClick={this.onValueClick}>
              {value}
            </span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {(status === 'editing') ? inputEdit : ''}
      </li>
    )
  }
}
