import React from 'react'
import Register from '../components/Register'
import { Routes , Route , Outlet } from 'react-router-dom'
import Login from '../components/Login'
export default function App() {
  return (
    <div>
      <Outlet></Outlet>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>


      </Routes>

    </div>
  )
}
