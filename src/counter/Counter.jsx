import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, string } from '../slice/slice'
const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const string2 = useSelector((state) => state.counter.string);
  const dispach = useDispatch()
  return (
    <>
      <button onClick={() => {dispach(string("sssss")) }}>{counter}</button>
      <input
        type='text'
        onChange={() => {
          dispach(decrement("Assalomu alekum"))
        }}
      />
    </>
  )
}

export default Counter
