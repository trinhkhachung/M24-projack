import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../src/store/reducer/reducer';
import '../css/User.css'
export default function UserManagement() {
    const users = useSelector((state: any) => state.reducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const handleBlockUser = (userId: number) => {
        // Logic to block user with userId
        console.log(`Block user with ID: ${userId}`);
    };

    const handleDeleteUser = (userId: number) => {
        // Logic to delete user with userId
        console.log(`Delete user with ID: ${userId}`);
    };

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            {users.map((user: any) => (
                <div key={user.id} className="user-item">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <button onClick={() => handleBlockUser(user.id)}>Block</button>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
