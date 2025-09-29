import React from "react";

const MainNav = () => {
  return (
    <>
      <div className="flex-grow">
        <div className="flex justify-between items-center bg-white p-4">
          <div className="flex items-center">
            <a href="/privatezxl-employee-create-employee">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mr-4">
                <span className="flex items-center">
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
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  New employee
                </span>
              </button>
            </a>
            <div className="relative">
              <input
                className="bg-gray-200 text-white rounded-md py-2 px-4 w-64 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Search"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
