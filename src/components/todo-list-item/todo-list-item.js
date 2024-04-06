import React from 'react';
import PropTypes from 'prop-types';

import './todo-list-item.css';

function TodoListItem({ value, status, id, onDeleted, onToggleDone, done, createdAt }) {
  let classNames = '';
  let checked = false;
  if (done) {
    classNames += ' completed';
    checked = true;
  }

  const inputEdit = <input type="text" className="edit" defaultValue="Editing task" />;

  return (
    <li key={id} className={classNames}>
      <div className="view">
        <input id={id} className="toggle" type="checkbox" onChange={() => onToggleDone(id)} defaultChecked={checked} />
        <label htmlFor={id}>
          <span className="description">{value}</span>
          <span className="created">created {createdAt}</span>
        </label>
        <button className="icon icon-edit" type="button" aria-label="Edit" />
        <button className="icon icon-destroy" type="button" onClick={onDeleted} aria-label="Delete" />
      </div>
      {status === 'editing' ? inputEdit : ''}
    </li>
  );
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

TodoListItem.defaultProps = {
  status: null,
};

export default TodoListItem;
