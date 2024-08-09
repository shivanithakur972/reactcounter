import React from 'react'

function NameList() {
    const persons = [
{
    'id':'1',
    'name':'alexa',
    'age':'30',
    'skill':'React js'
},
{
    'id':'2',
    'name':'alexa',
    'age':'30',
    'skill':'Next js'
},
{
    'id':'3',
    'name':'alexa',
    'age':'30',
    'skill':'Vue js'
},
    ];
    const personList = persons.map((person) => {
        const { id, name, age, skill } = person;
        return (
        <h2 key={id}>I am {name} I am {age} years old  I am {skill}</h2>
        )
    });
  return (
    <div>{personList}
    </div>
  )
}

export default NameList
