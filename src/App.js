import React from 'react'
import useState from './hooks/useState'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>useState()</h1>
        <button
          className="App-button"
          onClick={() => {
            setCounter(a => a + 1)
          }}
        >
          Increment counter!
        </button>
        <p>{counter}</p>
      </header>
    </div>
  )
}

export default App
