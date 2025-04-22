import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [randomNumber, setRandomNumber] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const spin = () => {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomValue);
  };

  return (
    <div className="App">
      <header className="App-header">
     
        <p>
          Counter: <span>{count}</span>
        </p>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <p>Random Spin Box</p>
          <div className="spin-box">
            <p>{randomNumber}</p>
          </div>
          <button onClick={spin}>Spin</button>
        </div>
      
      </header>
    </div>
  );
}

export default App;
