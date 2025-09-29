import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/auth';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [auth, setAuth] = useAuth();

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

    if (password !== confirmPassword) {
      toast.error('Password and confirm password do not match');
      return;
    }

    try {
      const response = await axios.post(
        'https://finmap.onrender.com/api/v1/updatePassword',
        {
          oldPassword,
          newPassword: password,
          confirmNewPassword: confirmPassword,
          email: auth.employee,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success('Password successfully changed');
        setSuccess(response.data.message);
        setOldPassword('');
        setPassword('');
        setConfirmPassword('');
      } else {
        toast.error('Unable to change password');
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error('Unable to change password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4 relative">

      <div className=" w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
      <Link
                to={'/privatezxl-dashboard'}
                className="bg-gray-200 absolute top-4 left-4  px-3 py-2 mb-3 text-black  rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center w-40"
            >
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                </svg>
                Back to Home
            </Link>
        <h2 className="text-2xl font-bold mb-6 text-center font-mono">Change Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Old Password:</label>
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
            <label className="block mb-1 text-gray-700 font-semibold">New Password:</label>
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
            <label className="block mb-1 text-gray-700 font-semibold">Confirm Password:</label>
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
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
