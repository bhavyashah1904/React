import React from 'react'
import {useState} from 'react'
 function UserInfo({name, inputAge}) {
  // const {name, age} = props
  const [age, setAge] = useState(inputAge)

  const updateAge = (input) => {
    input === '+' ? setAge(age + 1) : setAge(age-1)
  }
  
  return (
    <div>
    <div>Name : {name}</div>
    <div>Age : {age}</div>
    <button onClick={() => updateAge('+')}>Increase Age</button>
    <button onClick={() => updateAge('-')}>Decrease Age</button>
    </div>
  )
}

export default UserInfo;
