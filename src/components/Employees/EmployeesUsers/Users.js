import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth";
// import MainNav from "./MainNav";
const UsersTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [highlightedRows, setHighlightedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [auth,setAuth]=useAuth()
  const navigate=useNavigate()
  const employeesPerPage = 10;
  

  useEffect(() => {
    console.log('auth logging',auth);
    const fetchData = async () => {
      try {
        const response = await axios.post("https://finmap.onrender.com/api/v1/getCustomerByEmployeeId",
        {id:auth.empId}, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
        console.log('response.data', response.data.data)
        setEmployeeData(response.data.data)
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, []);


  // const handleLogout = async () => {
  //   try {
  //     await axios.post('https://finmap.onrender.com/api/v1/AdminLogout')
  //     Cookies.removeItem('token')
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
      {/* 
      <MainNav />
      <div className="border-b-2 border-gray-400 w-full my-4"></div> */}
      <table className="w-full ml-2 ">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">S.No</th>
            <th className="py-2 px-4">Customer Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">User Id</th>
            <th className="py-2 px-4">Sub admin</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((customer, index) => (
            <tr

              key={index}

              className={`border-b border-gray-200 bg-green-100 text-center hover:bg-red-200 ${highlightedRows[index] ? 'bg-red-100' : ''} border-b`}
              style={{ cursor: 'pointer' }}

            >
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{customer.firstName} {customer.lastName}</td>
              <td className="py-2 px-4">{customer.email}</td>
              <td className="py-2 px-4 flex justify-center">
                <p className={
                  customer.loanSanctioned ? 'text-green-500' :
                    customer.loanApproved ? 'text-blue-500' :
                      customer.documentsVerified ? 'text-yellow-600' :
                        customer.documentsUploded ? 'text-orange-600' :
                          'text-gray-600'
                }>
                  {
                    customer.loanSanctioned ? 'Loan Sanctioned' :
                      customer.loanApproved ? 'Loan Approved' :
                        customer.documentsVerified ? 'Documents Verified' :
                          customer.documentsUploded ? 'Documents Uploaded' :
                            'No Status Available'
                  }
                </p>
              </td>
              <td className="py-2 px-4">{customer._id}</td>
              <td className="py-2 px-4">
                <NavLink
                   to={`/customerDetails/${customer._id}`}
                  className="text-orange-400 py-1 px-2 rounded"
                >
                  View
                </NavLink>
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

      </div >
    </>
  );
};

export default UsersTable;
