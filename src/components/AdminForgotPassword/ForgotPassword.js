import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../img/homepage.png';
import VerificationPage from './VerifyCode';
import { toast } from 'react-toastify';
import axios from 'axios';

const AdminForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showVerificationPage, setShowVerificationPage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      
    const response = await axios.post("https://finmap.onrender.com/api/v1/Admin/forgetPassword",
    { email:email },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
    console.log('Email submitted:', email); 
    if(response){
      toast.success('reset token sent to email')
      // setShowVerificationPage(true);
      // navigate('/forgot-password/verify'); 
    }
    } catch (error) {
      toast.error('Reset link was not sent')
    }
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
      {showVerificationPage ? (
        <VerificationPage Emailprop={email}/>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Forgot Password
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Enter your email for the verification process, <br /> we will send a
            reset password link to your email.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Continue
            </button>
          </form>
          <p className="mt-4 text-center">
            <a href="/sign-up" className="text-green-500 hover:text-green-600">
              Back to sign up
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminForgotPassword;

