import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const EmployeeStatus = () => {
  const [subAdminData, setSubAdminData] = useState([]);
  const [highlightedRows, setHighlightedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const subAdminsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://finmap.onrender.com/api/v1/Admin/getAllSubAdmin", {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
        console.log('response.data', response.data);
        setSubAdminData(response.data.data);
      } catch (error) {
        console.error("Error fetching sub-admin data:", error);
      }
    };

    fetchData();
  }, []);

  const handleActivate = async (userId) => {
    try {
      const response = await axios.post("https://finmap.onrender.com/api/v1/Admin/deleteSubAdmin",
        { userId },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
      if (response.data.success === true) {
        toast.success("Sub-admin deleted successfully");
        setSubAdminData((prevData) =>
          prevData.map((subAdmin) =>
            subAdmin._id === userId ? { ...subAdmin, approved: true, denied: false } : subAdmin
          )
        );
      }
    } catch (error) {
      toast.error("Unable to activate sub-admin");
    }
  };

  // const handleLogout = async () => {
  //   try {
  //     await axios.post('https://finmap.onrender.com/api/v1/AdminLogout');
  //     Cookies.remove('token');
  //     window.location.href = "/admin-login";
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //   }
  // };

  const indexOfLastSubAdmin = currentPage * subAdminsPerPage;
  const indexOfFirstSubAdmin = indexOfLastSubAdmin - subAdminsPerPage;
  const currentSubAdmins = subAdminData.slice(indexOfFirstSubAdmin, indexOfLastSubAdmin);

  const handlePageChange = (event) => {
    setCurrentPage(Number(event.target.textContent));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(subAdminData.length / subAdminsPerPage); i++) {
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
      {subAdminData.length === 0 ? (
        <div className="flex justify-center top-4 min-h-screen">
          <span className="text-xl text-gray-500">No data was found</span>
        </div>
      ) : (
        <div className="min-h-screen">
          
            <div className="flex justify-between mb-4 px-2 py-2">
              <h2 className="text-3xl font-semibold">Subadmin Details</h2>
              <Link
                to="/privatezxl-admin-create-subadmin"
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
                Create Sub Admin
              </Link>
            </div>
            <table className="w-full ml-2 ">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">S.No</th>
                  <th className="py-2 px-4">Sub-admin Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">User Id</th>
                  <th className="py-2 px-4">Activation</th>
                </tr>
              </thead>
              <tbody>
                {currentSubAdmins.map((subAdmin, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 bg-green-100 text-center hover:bg-red-200 ${highlightedRows[index] ? 'bg-red-100' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <td className="py-1 px-4">{index + 1 + indexOfFirstSubAdmin}</td>
                    <td className="py-1 px-4">{subAdmin.fullName}</td>
                    <td className="py-1 px-4">{subAdmin.email}</td>
                    <td className="py-1 px-4">{subAdmin._id}</td>
                    <td className="py-1 px-4">
                      {subAdmin.approved ? (
                        <span className="text-red-500 text-xs">SubAdmin deleted</span>
                      ) : subAdmin.denied ? (
                        <span className="text-red-500 text-xs">Sub-admin was denied</span>
                      ) : (
                        <div className="flex text-base gap-2 ml-8">
                          <button
                            // onClick={() => handleActivate(subAdmin._id)}
                            className="bg-green-500 px-2 py-1 rounded-md text-white hover:scale-110 hover:text-base hover:bg-green-500 transition-transform ease-in-out"
                          >
                            edit
                          </button>
                          <button
                            onClick={() => handleActivate(subAdmin._id)}
                            className="bg-red-500 px-2 py-1 rounded-md text-white hover:scale-110 hover:text-base hover:bg-red-700 transition-transform ease-in-out"
                          >
                            delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center my-4">
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
      )}
        </>
      );
};

      export default EmployeeStatus;
