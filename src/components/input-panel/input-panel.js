import React, {Component} from "react";

import "./input-panel.css"

export default class InputPanel extends Component {

  render() {
    return (
      <input type="text"
             className="new-todo"
             placeholder={'What needs to be done?'}
             autoFocus={true}
             onChange={this.props.onValueChange}
             value={this.props.value}
      />
    )
  }

}