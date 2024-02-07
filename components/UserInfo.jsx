import React from 'react'
import {useState} from 'react'
 function UserInfo({name, inputAge}) {
  // const {name, age} = props
  const [age, incrAge] = useState(inputAge)

  
  return (
    <div>
    <div>Name : {name}</div>
    <div>Age : {age}</div>
    <button onClick={() => incrAge(age + 1)}>Increase Age</button>
    <button onClick={() => incrAge(age - 1)}>Decrease Age</button>
    </div>
  )
}

export default UserInfo;
