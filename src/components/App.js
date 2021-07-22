import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function App() {
  // eslint-disable-next-line no-console
  console.log(Calculate);
  return (
    <>
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    </>
  );
} export default App;
