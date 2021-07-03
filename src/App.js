import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Overly-Played Counter</h1>
        <p>
          You clicked me {count} times!
        </p>
      </header>
    </div>
  );
}

export default App;
