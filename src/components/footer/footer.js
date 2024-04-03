import React, { Component } from "react";
import PropTypes from "prop-types";

import Filter from "../filters/filters";
import "./footer.css";

export default class Footer extends Component {
  render() {
    const { leftCount, deleteAllItems, filter, onFilterChange } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{leftCount} items left</span>
        <Filter filter={filter} onFilterChange={onFilterChange} />
        <button className="clear-completed" onClick={deleteAllItems}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  leftCount: PropTypes.number.isRequired,
  deleteAllItems: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
