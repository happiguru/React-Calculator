import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => (

  <button
    type="button"
    onClick={() => { handleClick(name); }}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired,
};

export default Button;
