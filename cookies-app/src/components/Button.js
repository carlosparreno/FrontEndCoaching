import React from "react";

function Button(props) {
  return (
    <div className="margin">
      <button onClick={props.action}>{props.text}</button>
    </div>
  );
}

export default Button;
