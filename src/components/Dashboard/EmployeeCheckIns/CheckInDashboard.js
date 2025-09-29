
import Sidebar from "./../Sidebar";
import Navbar from "./../Navbar";
import { useAuth } from "../../../context/auth";
import { Navigate } from "react-router-dom";
import CheckInList from "./CheckInList";
// import MainNav from "./MainNav";

const CheckInDashboard = () => { 
  const [auth, setAuth] = useAuth();
  console.log('auth:',auth);
  if (!auth.adminToken) {
    return <Navigate to="/privatezxl-login" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="border-b-2 border-gray-400 w-full  my-4"></div>
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-grow ">
          {/* Navbar */}
          {/* <MainNav/>
          <div className="border-b-2 border-gray-400 w-full my-4"></div> */}
          {/* Dashboard Table */}
          <div className="bg-white shadow-md rounded min-h-screen overflow-hidden">
            <CheckInList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInDashboard;



 
