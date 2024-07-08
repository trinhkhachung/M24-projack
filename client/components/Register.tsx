import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, addUser } from '../src/store/reducer/reducer'
import './Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    phone: ''
  });

  const users = useSelector((state:any) => state.reducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleInput = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleForm = (e:any) => {
    e.preventDefault();
    dispatch(addUser(formData));
    setFormData({
      name: '',
      email: '',
      password: '',
      age: '',
      phone: ''
    });
  };

  return (
    <div className='div-r'>
      <form onSubmit={handleForm} className='form-r'>
        <h2 className='h2-r'>Register</h2>
        <input className='input-r' onChange={handleInput} type="text" name="name" placeholder='name' />
        <input className='input-r' onChange={handleInput} type="text" name="email" placeholder='email' />
        <input className='input-r' onChange={handleInput} type="password" name="password" placeholder='password' />
        <input className='input-r' onChange={handleInput} type="number" name="age" placeholder='age' />
        <input className='input-r' onChange={handleInput} type="text" name="phone" placeholder='phone' />
        <button type='submit'>Register</button>
      </form>

      {/* Display users */}
      <div className='div-r'>
        <h2>Users</h2>
        <ul>
          {
            users.map((item:any)=>{
             return <p>{item.name} , {item.id}</p>
              

            }
          )
          }
        </ul>
      </div>
    </div>
  );
}
