import React, { useState } from 'react'

export default function HookCounter() {
    const [count,setCount] = useState (0)
    const handlClickincrement = () => {
        setCount(count+1)
    }
    const handlClickdecrement = () => {
        setCount(count-1)
    }
  return (
    <div>
      count:{count}
      <button onClick={handlClickincrement}>Increment</button>
      <button onClick={handlClickdecrement}>Decrement</button>
    </div>
  )
}
