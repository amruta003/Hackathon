import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import ChangePassword from './changePassword'
function App() {
  return (
    <>
        <Routes>
          <Route 
          path="changePassword" 
          element={<ChangePassword />} />
        </Routes>
    </>
  )
}

export default App
