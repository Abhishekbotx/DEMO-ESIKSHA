import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [auth, setAuth] = useAuth()
    const navigate=useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'oldPassword') {
            setOldPassword(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        // if (!oldPassword || !password || !confirmPassword) {
        //     // setError('All fields are required');
        //     return;
        // }

        if (password !== confirmPassword) {
            toast.error('Password and confirm password do not match');
            // setError('Password and confirm password do not match');
            return;
        }
        //oldPassword,newPassword,confirmNewPassword,email
        try {
            const response = await axios.post('https://finmap.onrender.com/api/v1/Admin/updatePassword', {
                oldPassword,
                newPassword: password,
                confirmNewPassword: confirmPassword,
                email: auth.admin
            });

            if (response.data.success) {
                toast.success('password successfully changed')
                setSuccess(response.data.message);
                setOldPassword('');
                setPassword('');
                setConfirmPassword('');
            } else {
                toast('unable  to change password')
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Error updating password:', error);
            toast.error('unable  to change password')
            // setError('An error occurred while updating password');
        }
    };

    return (
        <div className="flex items-center relative justify-center min-h-screen bg-slate-50">
            <button
                onClick={() => navigate('/privatezxl-dashboard')}
                className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
            >
                Home
            </button>
            <div className="relative w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
            
                <h2 className="text-2xl font-bold mb-4 text-center">Change Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <div className="text-red-500">{error}</div>}
                    {success && <div className="text-green-500">{success}</div>}
                    <div>
                        <label className="block mb-1">Old Password:</label>
                        <input
                            required
                            type="password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            name="oldPassword"
                            value={oldPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-1">New Password:</label>
                        <input
                            required
                            type="password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Confirm Password:</label>
                        <input
                            required
                            type="password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-1/2 translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
