import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { shortenURL } from './services/api';

function App() {

  const sample = "sample URL"

  const handleClick = () => {
    shortenURL(sample)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" onClick={handleClick}>Hello World</Button>
      </header>
    </div>
  );
}

export default App;
