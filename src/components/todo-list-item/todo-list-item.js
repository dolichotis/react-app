import React, { Component } from "react";
import PropTypes from "prop-types";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  static defaultProps = {
    status: "",
  };

  render() {
    const { value, status, id, onDeleted, onToggleDone, done, createdAt } =
      this.props;

    let classNames = "";
    let checked = false;
    if (done) {
      classNames += " completed";
      checked = true;
    }

    const inputEdit = (
      <input type="text" className="edit" defaultValue="Editing task" />
    );

    return (
      <li key={id} className={classNames}>
        <div className="view">
          <input
            id={id}
            className="toggle"
            type="checkbox"
            onChange={() => onToggleDone(id)}
            defaultChecked={checked}
          />
          <label htmlFor={id}>
            <span className="description">{value}</span>
            <span className="created">created {createdAt}</span>
          </label>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={onDeleted} />
        </div>
        {status === "editing" ? inputEdit : ""}
      </li>
    );
  }
}

TodoListItem.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.string,
  id: PropTypes.number.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
};
