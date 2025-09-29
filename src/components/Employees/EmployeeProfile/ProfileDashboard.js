import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
// import EmployeeProfile from "./UpdateProfile";
import { useAuth } from '../../../context/auth'
import { Navigate } from 'react-router-dom'
import EmployeeProfileComp from "./UpdateEmployeeProfile";
const EmployeeProfileDashboard = () => { 
  const [auth, setAuth] = useAuth();
  if (!auth.token) {
    return <Navigate to="/employee-login" />;
  }
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Navbar */}
        <Navbar />
        <div className="border-b-2 border-gray-400 w-full my-4"></div>
        <div className="flex flex-grow">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Content */}
          <div className="flex-grow">
            {/* Navbar */}
            {/* <MainNav/>
            <div className="border-b-2 border-gray-400 w-full my-4"></div> */}
            {/* Employee Table */}
            <div className="bg-white shadow-md rounded">
              <EmployeeProfileComp/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EmployeeProfileDashboard;