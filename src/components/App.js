import React, { useState } from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [results, setResults] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );
  const handleClick = (operation) => {
    const newState = calculate(results, operation);
    setResults(newState);
  };

  return (
    <>
      <div className="app">
        <h1>Maths Magician Calculator</h1>
        <Display result={
          `${results.total || '0'}
            ${results.operation || ''}
            ${(results.total && results.next) || ''}`
          }
        />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
