import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import MainNav from "../Dashboard/MainNav";
import CreateSubadmin from "./CreateSubadmin";
import UserProfileForm from "./CreateSubadmin";
import { useAuth } from "../../context/auth";
import { Navigate } from "react-router-dom";

const CreateSubadminDashboard = () => { 
  const [auth, setAuth] = useAuth();
  if (!auth.adminToken) {
    return <Navigate to="/privatezxl-login" />;
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
          {/* Navbar */}
          <MainNav/>
          <div className="border-b-2 border-gray-400 w-full my-4"></div>
          {/* Subadmin Details */}
          <div className="bg-white shadow-md rounded">
            <UserProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSubadminDashboard;



 
