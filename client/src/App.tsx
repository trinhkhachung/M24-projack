import React from 'react'
import Register from '../components/pages/Register'
import { Routes, Route, Outlet } from 'react-router-dom'
import Login from '../components/pages/Login'
import UserManagement from '../components/pages/UserManagement'
export default function App() {
  return (
    <div>
      <Outlet></Outlet>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/admin/user' element={<UserManagement></UserManagement>}></Route>



      </Routes>

    </div>
  )
}
