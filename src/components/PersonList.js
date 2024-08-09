import React from 'react'

function PersonList({person}) {
  return (
    <div>
      <h2>I am {person.name} I am {person.age} years old  I am {person.skills}</h2>
    </div>
  )
}

export default PersonList
