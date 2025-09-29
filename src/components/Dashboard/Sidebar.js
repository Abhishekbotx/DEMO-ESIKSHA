import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";

const Sidebar = () => {
  const [auth,setAuth]=useAuth()
  const handlelogout = async () => {
    try {
      const response = await axios.post(
        "https://finmap.onrender.com/api/v1/AdminLogout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (!response.data.success) {
        toast.error("Unable to logout");
      } else {
        toast.success("Logout successful");
        setTimeout(() => {
          window.location.href = "/privatezxl-login";
        }, 1000);
      }
    } catch (error) {
      toast.error("An error occurred during logout");
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg flex flex-col lg:w-64 md:w-48 sm:w-32 w-16 items-center">
      <div className="flex items-center p-4 flex-col">
        <img
          src={`https://finmap.onrender.com/adminProfileImages/${auth.adminImage}`}
          alt="Admin"
          className="w-10 h-10 rounded-full mr-2 object-cover"
        />
        <span className="mt-4 font-semibold">{auth.adminName}</span>
      </div>
      <div className="flex-grow p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/privatezxl-dashboard"
              className="flex items-center p-2 rounded hover:bg-gray-200 transition duration-300"
              activeClassName="text-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-2 transition duration-300 ${
                  window.location.pathname === "/privatezxl-dashboard"
                    ? "text-green-500"
                    : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="flex items-center">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privatezxl-employees"
              className="flex items-center p-2 rounded hover:bg-gray-200 transition duration-300"
              activeClassName="text-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-2 transition duration-300 ${
                  window.location.pathname === "/privatezxl-employees"
                    ? "text-green-500"
                    : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privatezxl-subadmins"
              className="flex items-center p-2 rounded hover:bg-gray-200 transition duration-300"
              activeClassName="text-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-2 transition duration-300 ${
                  window.location.pathname === "/privatezxl-subadmins"
                    ? "text-green-500"
                    : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Sub Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privatezxl-update-profile"
              className="flex items-center p-2 rounded hover:bg-gray-200 transition duration-300"
              activeClassName="text-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-2 transition duration-300 ${
                  window.location.pathname === "/privatezxl-update-profile"
                    ? "text-green-500"
                    : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privatezxl-reviews"
              className="flex items-center p-2 rounded hover:bg-gray-200 transition duration-300"
              activeClassName="text-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-2 transition duration-300 ${
                  window.location.pathname === "/privatezxl-reviews"
                    ? "text-green-500"
                    : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles-news"
              className="flex items-center p-2 rounded hover:bg-gray-200 transition duration-300"
              activeClassName="text-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-2 transition duration-300 ${
                  window.location.pathname === "/articles-news"
                    ? "text-green-500"
                    : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Articles & News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privatezxl-settings"
              className="flex items-center p-2 rounded hover:bg-gray-200 transition duration-300"
              activeClassName="text-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-2 transition duration-300 ${
                  window.location.pathname === "/privatezxl-settings"
                    ? "text-green-500"
                    : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="p-4">
        <NavLink
          to="#"
          onClick={handlelogout}
          className="flex items-center p-2 rounded hover:bg-gray-200 transition duration-300 mb-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 mr-2 transition duration-300 ${
              window.location.pathname === "/logout" ? "text-green-500" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
