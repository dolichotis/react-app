import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../index.css';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    const { id } = props;

    const savedStartTime = parseInt(localStorage.getItem(`start-time-${id}`), 10);
    const savedTimeSpent = parseInt(localStorage.getItem(`timer-${id}`), 10) || 0;

    let timeSpent = savedTimeSpent;
    if (savedStartTime) {
      const currentTime = Math.floor(Date.now() / 1000);
      timeSpent += currentTime - savedStartTime;
    }

    this.state = {
      isTimerRunning: !!savedStartTime,
      timeSpent,
      timer: null,
    };

    if (savedStartTime) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    const { timer } = this.state;
    if (timer) {
      clearInterval(timer);
      this.setState({ timer: null });
    }
  }

  startTimer = () => {
    const timer = setInterval(() => {
      this.setState((prevState) => {
        const newTimeSpent = prevState.timeSpent + 1;
        return { timeSpent: newTimeSpent };
      });
    }, 1000);
    this.setState({ timer });
  };

  handleStart = () => {
    const { id } = this.props;
    const { isTimerRunning } = this.state;
    if (!isTimerRunning) {
      const currentTime = Math.floor(Date.now() / 1000);
      localStorage.setItem(`start-time-${id}`, currentTime);
      this.startTimer();
      this.setState({ isTimerRunning: true });
    }
  };

  handleStop = () => {
    const { id } = this.props;
    const { timer, isTimerRunning, timeSpent } = this.state;
    if (isTimerRunning) {
      clearInterval(timer);
      localStorage.setItem(`timer-${id}`, timeSpent);
      localStorage.removeItem(`start-time-${id}`);
      this.setState({ isTimerRunning: false, timer: null });
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
