import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blockUser, getAllUsers } from '../store/reducer/reducer';
import '../css/User.css';

export default function UserManagement() {
    const users = useSelector((state: any) => state.reducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const handleBlockUser = (user: any) => {
        dispatch(blockUser(user))

    };

    const handleDeleteUser = (userId: number) => {
        console.log(`Delete user with ID: ${userId}`);
    };

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            <div className="user-list">
                {users.map((user: any) => (
                    <div key={user.id} className="user-item">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Status:</strong> <span className={`block-status ${user.block ? 'blocked' : 'active'}`}>{user.block ? 'Blocked' : 'Active'}</span></p>
                        <button onClick={() => handleBlockUser(user)}>Block</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
