import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import {  toast } from 'react-toastify';
const InactiveEmployeesTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [highlightedRows, setHighlightedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const employeesPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://finmap.onrender.com/api/v1/Admin/getInactiveEmployee", {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
        console.log('response.data', response.data);
        setEmployeeData(response.data.data);
        
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, []);

  const handleActivate = async (userId) => {
    try {
      const responseapprove = await axios.post("https://finmap.onrender.com/api/v1/Admin/activateEmployeeStatus",
        {
          userId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
      if (responseapprove.data.success === true) {
        toast.success("Employee activated successfully")
        setEmployeeData((prevData) =>
          prevData.map((employee) =>
            employee._id === userId ? { ...employee, approved: true, denied: false } : employee
          )
        );
       
          
        
      }
    } catch (error) {
      toast.error("Unable to activate employee")
    }
  };

  // const handleLogout = async () => {
  //   try {
  //     await axios.post('https://finmap.onrender.com/api/v1/AdminLogout');
  //     Cookies.removeItem('token');
  //     window.location.href = "/admin-login";
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //   }
  // };

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employeeData.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handlePageChange = (event) => {
    setCurrentPage(Number(event.target.textContent));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(employeeData.length / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  const highlightRow = (index, highlight) => {
    setHighlightedRows((prevHighlightedRows) => {
      const updatedHighlightedRows = [...prevHighlightedRows];
      updatedHighlightedRows[index] = highlight;
      return updatedHighlightedRows;
    });
  };

  return (
    <>
      {employeeData.length === 0 ? (
        <div className="flex justify-center top-4 h-screen">
          <span className="text-xl text-gray-500">No data was found</span>
        </div>
      ) : (
        <>
          <table className="w-full ml-2 ">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">S.No</th>
                <th className="py-2 px-4">Employee Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">User Id</th>
                <th className="py-2 px-4">Activation</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map((employee, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 bg-green-100 text-center hover:bg-red-200 ${highlightedRows[index] ? 'bg-red-100' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  <td className="py-2 px-4">{index + 1 + indexOfFirstEmployee}</td>
                  <td className="py-2 px-4">{employee.firstName} {employee.lastName}</td>
                  <td className="py-2 px-4">{employee.email}</td>
                  <td className="py-2 px-4">{employee._id}</td>
                  <td className="py-2 px-4">
                    {employee.approved ? (
                      <span className="text-green-500">Employee activated successfully</span>
                    ) : employee.denied ? (
                      <span className="text-red-500">Employee was denied</span>
                    ) : (
                      <div className="flex text-base gap-2 ml-8">
                        <button
                          onClick={() => handleActivate(employee._id)}
                          className="bg-blue-500 px-2 py-1 rounded-md text-white hover:scale-110 hover:text-base hover:bg-green-500 transition-transform ease-in-out"
                        >
                          Activate
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
        </>
      )}
    </>
  );
};

export default InactiveEmployeesTable;
