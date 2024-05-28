import React from 'react';
import PropTypes from 'prop-types';

import '../../index.css';

function InputPanel({ onValueChange, value }) {
  return (
    <input
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={onValueChange}
      value={value}
    />
  );
}

InputPanel.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputPanel;
