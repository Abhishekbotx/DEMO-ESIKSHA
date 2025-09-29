import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import MainNav from "./MainNav";
// import StatusTable from "./EmployeeStatusTable";
import EmployeeStatusTableAd from "../Employees/EmployeeStatusTable";
import EmployeeActiveTable from "./EmployeeActiveTable";


const EmployeeDashboardAd = () => { 

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
          {/* Navbar */}


          {/* Employee Table */}
          <div className="bg-white shadow-md rounded">
            <EmployeeActiveTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboardAd;



 
