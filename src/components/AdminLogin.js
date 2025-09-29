import React, { useState } from "react";
import backgroundImage from "../img/homepage.png";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://finmap.onrender.com/api/v1/AdminSignin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("response in browser:", response.data);

      if (response.data.success) {
        setAuth((prevAuth) => ({
          ...prevAuth,
          adminToken: response.data.token,
          admin: response.data.user
        }));
        toast.success("Login successful");
        localStorage.setItem("adminAuth", JSON.stringify(response.data));
        navigate("/privatezxl-dashboard");
      } else {
        if (response.data.message === "Profile Inactive") {
          toast.info("Profile is inactive");
        } else {
          toast.error("Please check your username and password");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        if (error.response.data.message === "Profile Inactive") {
          toast.info("Profile Inactive wait for admin acceptance");
        } else {
          toast.error("Signin failed: " + error.response.data.message);
        }
      } else {
        toast.error(" Login failed check internet connection");
      }
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-0 left-0 flex items-center">
        <a href="/" className="text-2xl font-bold text-black ml-5 md:ml-20 mt-4">
          finmap
        </a>
      </div>
      <div className="text-4xl font-bold mb-8 text-center">Welcome to Admin Log In</div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-xl font-bold mb-4">Log in to Finmap</div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
            <button
              onClick={handleSubmit}
              className="w-full mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              Sign In
            </button>
            <div className="mt-4 text-center">
              <NavLink to={"/admin-signup"} className="text-green-500 hover:text-green-600">
                Create a new admin?
              </NavLink>
            </div>
            <div className="mt-4 text-center">
              <a href="/forgot-password" className="text-green-500 hover:text-green-600">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
