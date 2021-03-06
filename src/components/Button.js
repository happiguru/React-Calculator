import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => (

  <button
    className="panel-btn"
    type="button"
    onClick={() => { handleClick(name); }}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
