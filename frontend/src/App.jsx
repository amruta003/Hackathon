import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import ChangePassword from './pages/changePassword/changePassword'
import CreateReview from './pages/createReview/createReview'
import DeleteReview from './pages/deleteReview/deleteReview'
import DisplayAllReview from './pages/displayallreviews/displayAllReviews'
import DisplayMovies from './pages/displayMovies/displayMovies'
import EditReview from './pages/editReview/editReview'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
function App() {
  return (
    <>
        <Routes>
          <Route 
          path="changePassword" 
          element={<ChangePassword />} />

          <Route 
          path="createReview"
          element={< CreateReview/>}
          />
         
         <Route 
          path="deleteReview"
          element={< DeleteReview />}
          />

          <Route 
          path="editReview"
          element={< EditReview />}
          />

          <Route 
          path="displayReview"
          element={< DisplayAllReview />}
          />

          <Route 
          path="displayMovies"
          element={< DisplayMovies/>}
          />

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
