import React from 'react'
import Register from './pages/Register'
import { Routes, Route, Outlet } from 'react-router-dom'
import Login from './pages/Login'
import UserManagement from './pages/UserManagement'
import CreatProducts from './pages/CreatProducts'
export default function App() {
  return (
    <div>
      <Outlet></Outlet>
      <Routes>
        <Route path='/' element={<CreatProducts></CreatProducts>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/admin/user' element={<UserManagement></UserManagement>}></Route>



      </Routes>

    </div>
  )
}
