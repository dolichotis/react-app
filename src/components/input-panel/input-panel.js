import React, {Component} from "react";

import "./input-panel.css"

export default class InputPanel extends Component {
  render() {
    return (
      <input className="new-todo"
             placeholder={'What needs to be done?'}
             autoFocus={true}
             onClick={() => this.props.addItem('Hello')}/>
    )
  }

}