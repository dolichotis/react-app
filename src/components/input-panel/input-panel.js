import React, { Component } from "react";
import PropTypes from "prop-types";

import "./input-panel.css";

export default class InputPanel extends Component {
  render() {
    return (
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={this.props.onValueChange}
        value={this.props.value}
      />
    );
  }
}

InputPanel.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
