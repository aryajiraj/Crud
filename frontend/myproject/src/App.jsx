// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register';
import Update from './components/Update';
import Delete from './components/Delete';
import View from './components/view'


function App() {

  return (
  <div style={{border: '5px solid red', padding:"10px"}}>
    <h1 style={{backgroundColor:"black",color:"white",width:'100%'}}>CRUD FUNCTION APP</h1>
    <Register />
    <Update/>
    <View/>
    <Delete/>
  </div>
  )
}

export default App