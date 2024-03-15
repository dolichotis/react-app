import React from "react";

import "./input-panel.css"

const InputPanel = () => {
  return (
    <input className="new-todo"
      placeholder={'What needs to be done?'} autoFocus={true}/>
  )
}

export default InputPanel;