import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="panel">
      <div className="pair">
        <Button value="+/-" />
        <Button value="%" />
        <Button value="÷" />
      </div>
      <div className="pair2">
        <Button value="8" />
        <Button value="9" />
        <Button value="7" />
        <Button value="X" />
      </div>
      <div className="pair3">
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="-" />
      </div>
      <div className="pair4">
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="+" />
      </div>
      <div className="pair5">
        <Button value="0" />
        <Button value="." />
        <Button value="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
