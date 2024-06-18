import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../index.css';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerRunning: false,
      timeSpent: 0,
      timer: null,
    };
  }

  componentWillUnmount() {
    const { timer } = this.state;
    if (timer) {
      clearInterval(timer);
      this.setState({ timer: null });
    }
  }

  handleStart = () => {
    const { isTimerRunning } = this.state;
    if (!isTimerRunning) {
      const timer = setInterval(() => {
        this.setState((prevState) => ({
          timeSpent: prevState.timeSpent + 1,
        }));
      }, 1000);
      this.setState({ isTimerRunning: true, timer });
    }
  };

  handleStop = () => {
    const { timer, isTimerRunning } = this.state;
    if (isTimerRunning) {
      clearInterval(timer);
      this.setState({ isTimerRunning: false });
    }
  };

  formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs > 0 ? `${hrs}:` : ''}${mins > 0 ? `${mins}:` : '0:'}${secs < 10 ? `0${secs}` : secs}`;
  };

  render() {
    const { value, status, id, onDeleted, onToggleDone, done, createdAt } = this.props;
    const { isTimerRunning, timeSpent } = this.state;

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
          <input
            id={id}
            className="toggle"
            type="checkbox"
            onChange={() => onToggleDone(id)}
            defaultChecked={checked}
          />
          <label htmlFor={id}>
            <span className="title">{value}</span>
            <span className="description">
              <button
                className="icon icon-play"
                type="button"
                onClick={this.handleStart}
                disabled={isTimerRunning}
                aria-label="Start timer"
              />
              <button
                className="icon icon-pause"
                type="button"
                onClick={this.handleStop}
                disabled={!isTimerRunning}
                aria-label="Pause timer"
              />
              {this.formatTime(timeSpent)}
            </span>
            <span className="description">created {createdAt}</span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="Edit" />
          <button className="icon icon-destroy" type="button" onClick={onDeleted} aria-label="Delete" />
        </div>
        {status === 'editing' ? inputEdit : ''}
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

TodoListItem.defaultProps = {
  status: null,
};

export default TodoListItem;
