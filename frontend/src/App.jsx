import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Login />} ></Route>
        <Route path='/signup' element = {<Signup />} ></Route>
        <Route path='/home' element = {<Home />}></Route>
        <Route path='/cart' element = {<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App