import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {  toast } from 'react-toastify';
import { useAuth } from "../../context/auth";

const EmployeeActiveTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [highlightedRows, setHighlightedRows] = useState([]);
  const [auth, setAuth] = useAuth();
  const employeesPerPage = 10; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log('auth logging:',auth);
        const response = await axios.get("https://finmap.onrender.com/api/v1/Admin/getActiveEmployee", {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
        console.log('response data:', response.data.data);
        setEmployeeData(response.data.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeactivate = async (userId) => {
    try {
      const response = await axios.post("https://finmap.onrender.com/api/v1/Admin/deactivateEmployeeStatus",
        { userId },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
      if (response.data.success === true) {
        toast.success("Employee deactivated successfully")
        setEmployeeData((prevData) =>
          prevData.map((employee) =>
            employee._id === userId ? { ...employee, approved: true, denied: false } : employee
          )
        );
      }
    } catch (error) {
      toast.error("Unable to deactivate employee")
    }
  };

  // Get the employees to be displayed on the current page
  const indexOfLastItem = currentPage * employeesPerPage;
  const indexOfFirstItem = indexOfLastItem - employeesPerPage;
  const currentEmployees = employeeData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (event) => {
    setCurrentPage(Number(event.target.textContent));
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(employeeData.length / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  // Function to toggle highlighting for a row
  const highlightRow = (index, highlight) => {
    setHighlightedRows((prevHighlightedRows) => {
      const updatedHighlightedRows = [...prevHighlightedRows];
      updatedHighlightedRows[index] = highlight;
      return updatedHighlightedRows;
    });
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-semibold">Employees Details</h2>
        <div className="flex gap-x-3">
          <Link
            to="/privatezxl-employee-manage-request"
            className="bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center"
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
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Manage request
          </Link>
          <Link
            to="/privatezxl-employee-inactive-employees"
            className="bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center"
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
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Manage Inactive Employees
          </Link>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">S.No</th>
            <th className="py-2 px-4">Employee Name</th>
            <th className="py-2 px-4">Employee ID</th>
            <th className="py-2 px-4">Employee Type</th>
            <th className="py-2 px-4">Date of Joining</th>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Activation</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => (
            <tr
              key={index + indexOfFirstItem}
              className={`bg-green-100 ${highlightedRows[index + indexOfFirstItem] ? "bg-red-100" : ""} border-b`}
              onMouseEnter={() => highlightRow(index + indexOfFirstItem, true)}
              onMouseLeave={() => highlightRow(index + indexOfFirstItem, false)}
            >
              <td className="py-2 px-4 text-center">{index + 1 + indexOfFirstItem}</td>
              <td className="py-2 px-4 text-center">{employee.firstName} {employee.lastName}</td>
              <td className="py-2 px-4 text-center">{employee._id}</td>
              <td className="py-2 px-4 text-center">{employee.accountType}</td>
              <td className="py-2 px-4 text-center">{employee.dateOfJoining}</td>
              <td className="py-2 px-4 text-center">{employee.position}</td>
              <td className="py-2 px-4 text-center">
                {employee.approved ? (
                  <span className="text-red-500">Deactivation successful</span>
                ) : employee.denied ? (
                  <span className="text-red-500">Employee was denied</span>
                ) : (
                  <div className="flex text-base gap-2 ml-8">
                    <button
                      onClick={() => handleDeactivate(employee._id)}
                      className="bg-blue-500 px-2 py-1 rounded-md text-white hover:scale-110 hover:text-base hover:bg-green-500 transition-transform ease-in-out"
                    >
                      Deactivate
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
      <nav aria-label="Page navigation">
              <ul className="flex list-style-none">
                <li>
                  <a
                    href="#"
                    onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 rounded-l"
                  >
                    &lt;&lt;
                  </a>
                </li>
                {pageNumbers.map(number => (
                  <li key={number}>
                    <a
                      href="#"
                      onClick={handlePageChange}
                      className={`border border-gray-300 text-gray-500 hover:bg-gray- hover:text-gray-700 leading-tight py-2 px-3 ${currentPage === number ? 'bg-white text-green-500' : 'bg-white'}`}
                    >
                      {number}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    onClick={() => setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 rounded-r"
                  >
                    &gt;&gt;
                  </a>
                </li>
              </ul>
            </nav>
      </div>
    </div>
  );
};

export default EmployeeActiveTable;
