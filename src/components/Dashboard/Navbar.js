import React from "react";
import { useAuth } from "../../context/auth";

const Navbar = () => {
  const [auth,setAuth]=useAuth()
  return (
    <> 
      <header className="flex items-center justify-between px-4 py-2 mt-4">
        <div className="font-bold text-xl ml-8">
        <a href="/">
          finmap
        </a>
        </div>
        <div className="flex items-center mr-8">
          <span className="mr-4 font-semibold">Admin Dashboard</span>
          <img
            className="w-10 h-10 rounded-full "
            src={`https://finmap.onrender.com/adminProfileImages/${auth.adminImage}`}
            alt="Admin"
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
