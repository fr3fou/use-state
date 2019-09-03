import React from 'react'
import useState from './hooks/useState'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>useState()</h1>
        <div>
          <button
            style={{ margin: 5 }}
            className="App-button"
            onClick={() => {
              setCounter(v => v + 1)
            }}
          >
            +
          </button>
          <button
            style={{ margin: 5 }}
            className="App-button"
            onClick={() => {
              setCounter(v => v - 1)
            }}
          >
            -
          </button>
        </div>
        <div className="App-input-wrapper">
          <label htmlFor="n">Set to</label>
          <input
            name="n"
            className="App-input"
            onChange={e => {
              const val = e.target.value
              setCounter(val)
            }}
            type="number"
          />
        </div>
        <p>Counter: {counter}</p>
      </header>
    </div>
  )
}

export default App
