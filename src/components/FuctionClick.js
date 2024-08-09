import React from 'react'
import { useState } from "react"

function FuctionClick() {
  const [count, setCount] = useState(0)
  
  const increment = () => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    }
  }
  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  function clickHandler () {
    console.log('button click')
       }
  return (
    <div>
    <h1> count {count}</h1>
    <button onClick={increment} className='mt-2'>increment</button>
    <button onClick={decrement} className='mt-2'>decrement</button>
    <br ></br>

    <button className='me-2' onClick={clickHandler}>Click</button>

  </div>
  )
}

export default FuctionClick
