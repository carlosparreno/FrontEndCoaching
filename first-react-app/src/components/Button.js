import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button className={props.className} onClick={props.action}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  action: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  action: () => {
    console.log("No action assigned to this component");
  },
  className: undefined
};

export default Button;
