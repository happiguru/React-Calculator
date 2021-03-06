import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  return (
    <>
      <div className="panel">
        <Button name="AC" handleClick={clickHandler} />
        <Button name="+/-" handleClick={clickHandler} />
        <Button name="%" handleClick={clickHandler} />
        <Button name="÷" handleClick={clickHandler} />
        <Button name="7" handleClick={clickHandler} />
        <Button name="8" handleClick={clickHandler} />
        <Button name="9" handleClick={clickHandler} />
        <Button name="x" handleClick={clickHandler} />
        <Button name="4" handleClick={clickHandler} />
        <Button name="5" handleClick={clickHandler} />
        <Button name="6" handleClick={clickHandler} />
        <Button name="-" handleClick={clickHandler} />
        <Button name="1" handleClick={clickHandler} />
        <Button name="2" handleClick={clickHandler} />
        <Button name="3" handleClick={clickHandler} />
        <Button name="+" handleClick={clickHandler} />
        <Button name="0" handleClick={clickHandler} />
        <Button name="." handleClick={clickHandler} />
        <Button name="=" handleClick={clickHandler} />
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
