import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import MainNav from "../Dashboard/MainNav";
import ChangePassword from "./Settings";
// import Reviews from "./Settings";


const SettingDashboard = () => { 

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
          {/* <MainNav/> */}
          {/* <div className="border-b-2 border-gray-400 w-full my-4"></div> */}
          {/* Employee Table */}
          <div className="bg-white shadow-md rounded">
            <ChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingDashboard;



 
