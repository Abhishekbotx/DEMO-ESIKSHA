import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import backgroundImage from '../../img/homepage.png';

const AdminResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== newPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
    }
  };

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`https://finmap.onrender.com/api/v1/Admin/resetPassword/${token}`, { password: newPassword,confirmPassword:confirmPassword });
      toast.success('Password reset successfully!');
      setTimeout(() => {
        navigate('https://finmapxfront.vercel.app/privatezxl-login'); // Redirect to the login page or homepage
      }, 3000);
    } catch (error) {
      toast.error('Error resetting password');
    }
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="absolute top-0 left-0 flex items-center">
        <a href="/" className="text-2xl font-bold text-black ml-20 mt-4">
          finmap
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-8">Forgot Password</h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">New Password</h2>
        <div className="mb-4 relative">
          <input
            type={showNewPassword ? 'text' : 'password'}
            placeholder="New password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={toggleShowNewPassword}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showNewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>
        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={toggleShowConfirmPassword}
              className="text-gray-500 hover:text-gray-700 mb-6 focus:outline-none"
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div className={`mt-2 text-red-500 ${errorMessage ? 'visible' : 'invisible'} h-5 pl-2`}>
            {errorMessage}
          </div>
        </div>
        <button
          onClick={handleUpdatePassword}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default AdminResetPasswordPage;
