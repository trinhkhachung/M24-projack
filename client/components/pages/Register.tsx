import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, addUser } from '../../src/store/reducer/reducer';
import '../css/Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    phone: '',
    block: false
  });

  const [error, setError] = useState('');
  const users = useSelector((state: any) => state.reducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.age || !formData.phone) {
      setError('All fields are required');
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError('Invalid email format');
      return;
    }
    if (isNaN(Number(formData.age))) {
      setError('Age phai la so');
      return;
    }

    // Find the maximum id from existing users
    const maxId = users.length > 0 ? Math.max(...users.map((user: any) => user.id)) : 0;
    const newUser = {
      ...formData,
      id: maxId + 1
    };

    dispatch(addUser(newUser));
    setFormData({
      name: '',
      email: '',
      password: '',
      age: '',
      phone: '',
      block:false
    });
    setError('');
  };

  const isValidEmail = (email: string) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className='div-r'>
      <form onSubmit={handleForm} className='form-r'>
        <h2 className='h2-r'>Register</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input className='input-r' onChange={handleInput} type="text" name="name" value={formData.name} placeholder='name' />
        <input className='input-r' onChange={handleInput} type="text" name="email" value={formData.email} placeholder='email' />
        <input className='input-r' onChange={handleInput} type="password" name="password" value={formData.password} placeholder='password' />
        <input className='input-r' onChange={handleInput} type="text" name="age" value={formData.age} placeholder='age' />
        <input className='input-r' onChange={handleInput} type="text" name="phone" value={formData.phone} placeholder='phone' />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
