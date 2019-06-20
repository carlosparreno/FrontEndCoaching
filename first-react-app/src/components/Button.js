import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button onClick={props.action}>{props.children}</button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  action: PropTypes.func
};

Button.defaultProps = {
  action: () => {
    console.log("No action assigned to this component");
  }
};

export default Button;
