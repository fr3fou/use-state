import React from 'react'

const SET_VALUE = 'SET_VALUE'

const actions = {
  [SET_VALUE]: (_, newVal) => {
    return newVal
  },
}

function reducer(state, { type, payload }) {
  const handler = actions[type]

  if (handler) {
    return handler(state, payload)
  }

  return state
}

function useState(initalValue) {
  const [value, dispatch] = React.useReducer(reducer, initalValue)

  const setValue = v => {
    if (typeof v === 'function') {
      dispatch({ type: SET_VALUE, payload: v(value) })
      return
    }

    dispatch({ type: SET_VALUE, payload: v })
  }

  return [value, setValue]
}

export default useState