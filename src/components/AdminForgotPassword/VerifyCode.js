import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../img/homepage.png';
import axios from 'axios';

const VerificationPage = ({Emailprop}) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timeRemaining, setTimeRemaining] = useState(120); // 2 minutes in seconds
  const [isTimeOver, setIsTimeOver] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;

    if (!isTimeOver) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTimeOver]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsTimeOver(true);
    }
  }, [timeRemaining]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input field if it's not the last one
    if (index < 3 && value !== '') {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput.focus();
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const enteredCode = code.join('');

    e.preventDefault();
    const response = await axios.post("https://finmap.onrender.com/api/v1/Admin/verifyOtp",
    { otp:enteredCode },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
    

    // Logic to verify the code and proceed with the password reset process
    console.log('Verification code:', enteredCode);

    // Simulate successful verification
    if (enteredCode === '1234') {
      // Redirect to the update password page
      navigate('/update-password');
    } else {
      // Display an error message or handle the case when the code is incorrect
      console.log('Invalid verification code');
    }
  };

  const handleContinue = () => {
    const enteredCode = code.join('');
    // Logic to verify the code and proceed with the password reset process
    console.log('Verification code:', enteredCode);

    // Simulate successful verification
    if (enteredCode === '1234') {
      // Redirect to the update password page
      navigate('/update-password');
    } else {
      // Display an error message or handle the case when the code is incorrect
      console.log('Invalid verification code');
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput.focus();
    }
  };

  const handleResend = () => {
    setTimeRemaining(120); // Reset the timer to 2 minutes
    setIsTimeOver(false); // Reset the isTimeOver state
    // Call the API to resend the verification code
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
        <h2 className="text-2xl font-bold mb-4 text-center">Verification</h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter 4 digits code received on your mail.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center mb-4">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                  handleBackspace(index);
                }
              }}
              className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </form>
        {isTimeOver ? (
          <p className="text-red-500 text-center mb-4">Time over! Please click on resend.</p>
        ) : (
          <p className="text-gray-600 text-center mb-4">{formatTime(timeRemaining)}</p>
        )}
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full mb-4"
          disabled={isTimeOver}
          onClick={handleContinue}
        >
          Continue
        </button>
        <p className="text-center">
          <span>Didn't received the code? &nbsp;
          <a
            href="#"
            className="text-green-500 hover:text-green-600"
            onClick={handleResend}
          >
           Resend
          </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerificationPage;
 