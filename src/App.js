import React from 'react'
import { useState } from "react"

export default function App() {
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
   return (
    <div>
    <div>
    <h1> count {count}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>

  </div>
    </div>
  )
}


