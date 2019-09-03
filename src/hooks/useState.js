import React from 'react'

function useState(initalValue) {
  const [value, dispatch] = React.useReducer((_, val) => val, initalValue, iv =>
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
