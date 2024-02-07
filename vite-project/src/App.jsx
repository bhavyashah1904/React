import React from 'react'
import UserInfo from '../../components/UserInfo'
import './App.css'

function App() {

  return (
    <>
    <div className='pinfo'>
      <UserInfo name="Person 1" inputAge={25}/>
      <UserInfo name="Person 2" inputAge={35}/>
      <UserInfo name="Person 3" inputAge={45}/>
    </div>
      
    </>
  )
}

export default App
