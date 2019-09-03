import React from 'react'
import Prism from 'prismjs'
import './prism.css'

function CodeBlock({ code: c }) {
  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <pre
      style={{
        fontSize: '14px',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.12)',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      <code className="language-javascript">{`${c}`}</code>
    </pre>
  )
}

export default CodeBlock
