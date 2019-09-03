import React from 'react'
import useState from './hooks/useState'
import CodeBlock from './components/CodeBlock'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(() => true)
  const [stateCode, setStateCode] = useState('')

  React.useEffect(() => {
    fetchCode()
  }, [])

  async function fetchCode() {
    const res = await fetch(
      'https://raw.githubusercontent.com/fr3fou/use-state/master/src/hooks/useState.js'
    )
    const text = await res.text()
    setStateCode(text)
    setLoading(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>useState()</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="App-input-wrapper">
            <input
              name="n"
              className="App-input"
              placeholder="Set to..."
              onChange={e => {
                const val = e.target.value
                setCounter(Number(val))
              }}
              type="number"
            />
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              style={{ marginRight: 5, width: '50%' }}
              className="App-button"
              onClick={() => {
                setCounter(v => v + 1)
              }}
            >
              +
            </button>
            <button
              style={{ width: '50%' }}
              className="App-button"
              onClick={() => {
                setCounter(v => v - 1)
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="App-code-wrapper">
          <p className="App-counter">Counter: {counter}</p>
          {loading ? 'Loading...' : <CodeBlock code={stateCode} />}
        </div>
        <p>
          Star this on GitHub!
          <br />
          <a target="_blank" href="https://github.com/fr3fou/use-state">
            fr3fou/use-state
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
