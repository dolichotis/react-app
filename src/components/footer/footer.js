import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../filters/filters';
import './footer.css';

function Footer({ leftCount, deleteAllItems, filter, onFilterChange }) {
  return (
    <footer className="footer">
      <span className="todo-count">{leftCount} items left</span>
      <Filter filter={filter} onFilterChange={onFilterChange} />
      <button type="button" className="clear-completed" onClick={deleteAllItems}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  leftCount: PropTypes.number.isRequired,
  deleteAllItems: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Footer;
