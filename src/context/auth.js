import React, { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    employee: '',
    admin: '',
    token: "",
    adminToken: "",
    adminId:"",
    adminImage:"",
    empId: "",
    employeeName: "",
    employeeImage: ""

  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    const adminData = localStorage.getItem("adminAuth");

    if (data) {
      const parseData = JSON.parse(data);
      setAuth((prevAuth) => ({
        ...prevAuth,
        token: parseData.token,
        employee: parseData.user,
        empId: parseData.empId
      }));
    }

    if (adminData) {
      const parseAdminData = JSON.parse(adminData);
      setAuth((prevAuth) => ({
        ...prevAuth,
        adminToken: parseAdminData.token,
        admin: parseAdminData.user,
        adminId: parseAdminData.adminId
      }));
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};


const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
