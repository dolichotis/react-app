import React from "react";
import Filter from "../filters/filters";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <Filter/>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer;