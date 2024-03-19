import React, {Component} from "react";
import Filter from "../filters/filters";
import "./footer.css"

export default class Footer extends Component {
  render() {

    const {leftCount} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{leftCount} items left</span>
        <Filter/>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}
