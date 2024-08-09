import React from 'react'

export default function About(props) {
  return (
    <div>
      <h1>{props.values.heading}</h1>
      <p>{props.values.description}</p>
    </div>
  )
}
 