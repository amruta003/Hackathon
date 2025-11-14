import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import ChangePassword from './changePassword'
import Login from '../src/Login/Login'
import Register from './Register/Register'
function App() {
  return (
    <>
        <Routes>
          <Route 
          path="changePassword" 
          element={<ChangePassword />} />

          <Route
             path="Login"
          element={<Login />} /> 

          <Route
             path="Register"
          element={<Register />} /> 
          
         
        </Routes>
    </>
  )
}

export default App
