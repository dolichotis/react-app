import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../filters/filters';
import '../../index.css';

function Footer({ leftCount, clearCompletedItems, filter, onFilterChange }) {
  return (
    <footer className="footer">
      <span className="todo-count">{leftCount} items left</span>
      <Filter filter={filter} onFilterChange={onFilterChange} />
      <button type="button" className="clear-completed" onClick={clearCompletedItems}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  leftCount: PropTypes.number.isRequired,
  clearCompletedItems: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Footer;
