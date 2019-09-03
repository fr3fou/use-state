import React from 'react'

function reducer(_, value) {
  return value
}

function useState(initalValue) {
  const [value, dispatch] = React.useReducer(reducer, initalValue, iv =>
    typeof iv === 'function' ? iv() : iv
  )

  const setValue = v => {
    if (typeof v === 'function') {
      dispatch(v(value))
      return
    }

    dispatch(v)
  }

  return [value, setValue]
}

export default useState
