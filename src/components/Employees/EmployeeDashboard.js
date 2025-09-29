import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StatusTable from "./EmployeeStatusTable";
import { useAuth } from "../../context/auth";

const EmployeeDashboard = () => {
  const [auth, setAuth] = useAuth();

  if (!auth.token) {
    return <Navigate to="/employee-login" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="border-b-2 border-gray-400 w-full my-4"></div>
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-grow">
          {/* Employee Table */}
          <div className="bg-white shadow-md rounded">
            <StatusTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
