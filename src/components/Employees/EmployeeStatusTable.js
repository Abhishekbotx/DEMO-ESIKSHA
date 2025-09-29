import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import { useAuth } from "../../context/auth";
import LoanCompCard from "./LoanCompCard";

const EmployeeDashHome = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [auth, setAuth] = useAuth();
  const [loanData, setLoanData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    address1: '',
    address2: '',
    pincode: '',
    state: '',
    pancard: '',
    guaranterPancard: '',
    aadharcard: '',
    contactNumber: '',
    employmentType: '',
    employerName: '',
    monthlyIncome: 0,
    cibilReport: null
  });
  const [loading, setLoading] = useState(false);
  const [showCheckInButton, setShowCheckInButton] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        token: parseData.token,
        employee: parseData.user,
        empId: parseData.empId
      });
    }
  }, []);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.post(`https://finmap.onrender.com/api/v1/getEmployee`, {
          email: auth.employee
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
        console.log('response:login', response.data.data);
        if (response.data.success) {
          const { image, firstName, lastName } = response.data.data;
          setAuth((prevAuth) => ({
            ...prevAuth,
            employeeName: firstName + ' ' + lastName,
            employeeImage: image
          }));
        } else {
          toast.error("Failed to fetch employee data");
        }
      } catch (error) {
        toast.error("Error fetching employee data");
      }
    };
    console.log('auth logg kr rha:', auth);
    if (auth.empId) {
      fetchEmployeeData();
    }
  }, [auth.empId, auth.token, setAuth]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'monthlyIncome' ? parseInt(value) : value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
        const formDataToSend = new FormData();

        // Loop through formData and append to formDataToSend
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                if (key === 'monthlyIncome') {
                    const monthlyIncomeNumber = Number(formData[key]); 
                    console.log(`Appending monthlyIncome as number: ${monthlyIncomeNumber}`, typeof monthlyIncomeNumber);
                    formDataToSend.append(key, monthlyIncomeNumber);
                } else if (key === 'dateOfBirth') {
                    formDataToSend.append(key, formatDate(formData[key])); // Assuming formatDate is a function to format the date
                } else {
                    formDataToSend.append(key, formData[key]);
                }
            }
        }

        // Log FormData to check the entries
        for (const pair of formDataToSend.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        // Perform the API request to check customer existence
        const checkResponse = await axios.post("https://finmap.onrender.com/api/v1/checkCustomerExists",
            { email: formData.email },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });

        if (checkResponse.data.success === true) {
            setShowForm(false);
            setShowCheckInButton(false);
            analyzeCustomerData(formData.cibilReport);
            toast("Customer already exists, moving towards analyzing part");
            return;
        } else {
            // Perform the API request to check-in customer
            const response = await axios.post("https://finmap.onrender.com/api/v1/customerCheckIn",
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true
                });

            if (response.data.success) {
                toast.success(response.data.message || "Customer checked in successfully");
                setShowForm(false);
                setShowCheckInButton(false);
                analyzeCustomerData(formData.cibilReport);
            } else {
                toast.error(response.data.message || "Error during customer check-in");
            }
        }
    } catch (error) {
        console.error("Error during customer check-in:", error.response || error.message || error);
        toast.error("Error during customer check-in");
    } finally {
        setLoading(false);
    }
};




  const analyzeCustomerData = async (cibilReport) => {
    setLoading(true);
    toast.success("Analyzing process started");
    setLoanData([{
      bankName: "ICICI Bank",
      loanType: "Personal Loan",
      interestRate: "11.25%",
      loanAmount: "1,50,000",
      tenure: "4 years"
    }, {
      bankName: "HDFC Bank",
      loanType: "Personal Loan",
      interestRate: "11.25%",
      loanAmount: "1,50,000",
      tenure: "4 years"
    }, {
      bankName: "State Bank",
      loanType: "Personal Loan",
      interestRate: "11.25%",
      loanAmount: "1,50,000",
      tenure: "4 years"
    }]);
    // try {
    //   const formData = new FormData();
    //   formData.append('cibilReport', cibilReport);

    //   const response = await axios.post("https://finmap.onrender.com/api/v1/uploadFetchReport",
    //     formData,
    //     {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //       withCredentials: true
    //     });

    //   if (response.data.success) {
    //     const formattedContent = JSON.parse(response.data.loans);
    //     setLoanData(formattedContent);
    //     toast.success("Analyzing process started");
    //   } else {
    //     toast.error("Error during analyzing process");
    //   }
    // } catch (error) {
    //   setLoanData([{
    //     bankName: "ICICI Bank",
    //     loanType: "Personal Loan",
    //     interestRate: "11.25%",
    //     loanAmount: "1,50,000",
    //     tenure: "4 years"
    //   }, {
    //     bankName: "HDFC Bank",
    //     loanType: "Personal Loan",
    //     interestRate: "11.25%",
    //     loanAmount: "1,50,000",
    //     tenure: "4 years"
    //   }, {
    //     bankName: "State Bank",
    //     loanType: "Personal Loan",
    //     interestRate: "11.25%",
    //     loanAmount: "1,50,000",
    //     tenure: "4 years"
    //   }]);
    //   toast.error("Error during analyzing process");
    // } finally {
    //   setLoading(false);
    // }
  };

  const handlePageChange = (event) => {
    setCurrentPage(Number(event.target.textContent));
  };

  return (
    <div className="bg-white shadow-md rounded p-4 relative">
      {loading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-100 flex items-center justify-center z-50">
          <img src='https://cdn.pixabay.com/animation/2023/10/10/13/27/13-27-45-28_512.gif' alt="Loading..." />
        </div>
      )}
      <div className="mb-8">
        <div className='border-b-2 border-gray-400 min-h-screen w-full my-4'>
          {!showForm && showCheckInButton ? (
            <div>
              <h1 className="text-5xl text-center">Employee Dashboard</h1>
              <div className="mt-28 flex gap-y-8 justify-center items-center flex-col">
                <p className="text-3xl">Customer CheckIn?</p>
                <button onClick={() => setShowForm(true)} className='px-3 py-2 text-white bg-green-500 w-24 rounded-md'>CheckIn</button>
              </div>
            </div>
          ) : showForm ? (
            <form onSubmit={handleFormSubmit} className="mt-8 flex flex-col items-center">
              <h2 className="text-2xl mb-4 text-green-500">Customer Check-In Form</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                {Object.keys(formData).map((key) => (
                  <div key={key} className="flex flex-col">
                    <label>{key.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').slice(1)}</label>
                    {key === 'gender' ? (
                      <select
                        name={key}
                        value={formData[key]}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                      </select>
                    ) : key === 'employmentType' ? (
                      <select
                        name={key}
                        value={formData[key]}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                        required
                      >
                        <option value="">Select Employment Type</option>
                        <option value="Job">Job</option>
                        <option value="Business">Business</option>
                        <option value="Govt Employee">Govt Employee</option>
                      </select>
                    ) : key === 'dateOfBirth' ? (
                      <input
                        type="date"
                        name={key}
                        value={formData[key]}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                        required
                      />
                    ) : key === 'cibilReport' ? (
                      <input
                        type="file"
                        name={key}
                        onChange={handleFileChange}
                        className="border rounded p-2"
                        required
                      />
                    ) : (
                      <input
                        type={key === 'email' ? 'email' : key === 'monthlyIncome' ? 'number' : 'text'}
                        name={key}
                        value={formData[key]}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                        required
                      />
                    )}
                  </div>
                ))}
              </div>
              <button type="submit" className='mt-4 px-4 py-2 text-white bg-blue-500 rounded-md'>Submit</button>
              <button onClick={() => setShowForm(false)} className='mt-2 px-4 py-2 text-white bg-red-500 rounded-md'>Cancel</button>
            </form>
          ) : null}
          {loanData.length > 0 && <LoanCompCard loans={loanData} />}
        </div>
        {/* Render LoanCompCard when loanData is available */}
        
      </div>
    </div>
  );
};

export default EmployeeDashHome;
