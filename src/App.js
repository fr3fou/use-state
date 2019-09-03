import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  // noop
  const counter = 1
  // noop
  function setCounter() {}

  return (
    <div className="App">
      <header className="App-header">
        <h1>useState()</h1>

        <button className="App-button" onClick={() => setCounter(a => a + 1)}>
          Increment counter!
        </button>
        <p>{counter}</p>
      </header>
    </div>
  )
}

export default App
