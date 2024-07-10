import React, { useState } from 'react';
import '../css/Login.css'
export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted with:', formData);
    };

    return (
        <div className='login'>
            <h2 className='h2-l'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Username:</p>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Enter your username"
                        required
                        className='input-l'
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        required
                        className='input-l'
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
