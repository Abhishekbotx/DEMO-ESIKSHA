import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import { toast } from 'react-toastify';
import Loader from "./loader.gif";

const ProfileComponent = () => {
  const navigate=useNavigate()
  const { customerId } = useParams();
  const [userData, setUserData] = useState(null);
  const [auth] = useAuth();
  const [status, setStatus] = useState({
    documentsUploaded: true,
    documentsVerified: false,
    loanApproved: false,
    loanSanctioned: false,
  });
  const [loading, setLoading] = useState({
    documentsVerified: false,
    loanApproved: false,
    loanSanctioned: false,
  });
  const [progressWidth, setProgressWidth] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("Fetching customer data...");
        const response = await axios.post(
          "https://finmap.onrender.com/api/v1/getCustomerProfile",
          { id: customerId },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true
          }
        );

        const customerData = response.data.data;
        setUserData(customerData);

        setStatus({
          documentsUploaded: customerData.documentsUploaded,
          documentsVerified: customerData.documentsVerified,
          loanApproved: customerData.loanApproved,
          loanSanctioned: customerData.loanSanctioned,
        });

        console.log('status logging:', customerData);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchData();
  }, [customerId]);

  useEffect(() => {
    let newProgress = 10;
    if (status.documentsVerified) newProgress += 30;
    if (status.loanApproved) newProgress += 30;
    if (status.loanSanctioned) newProgress += 30;
    setProgressWidth(newProgress);
  }, [status]);

  const handleDocumentsVerifiedToggle = async () => {
    if (status.loanSanctioned) return;

    setLoading(prevLoading => ({ ...prevLoading, documentsVerified: true }));
    console.log("Toggling documents verified...");

    try {
      const response = await axios.post(
        "https://finmap.onrender.com/api/v1/documentsVerify",
        { email: userData.email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );

      console.log("Response from documentsVerify:", response.data);

      if (response.data.success) {
        setStatus(prevStatus => ({
          ...prevStatus,
          documentsVerified: !prevStatus.documentsVerified,
        }));
        if (!status.documentsVerified) {
          toast.success('Documents verified successfully');
        } else {
          toast('Documents verification status changed');
        }
      }
    } catch (error) {
      console.error("Error toggling documents verified:", error);
      toast.error('Document verification status was not changed');
    } finally {
      setLoading(prevLoading => ({ ...prevLoading, documentsVerified: false }));
    }
  };

  const handleLoanApprovalToggle = async () => {
    if (!status.documentsVerified===true) return;

    setLoading(prevLoading => ({ ...prevLoading, loanApproved: true }));
    console.log("Toggling loan approval...");

    try {
      const response = await axios.post(
        "https://finmap.onrender.com/api/v1/loanApproval",
        { email: userData.email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );

      console.log("Response from loanApproval:", response.data);

      if (response.data.success) {
        setStatus(prevStatus => ({
          ...prevStatus,
          loanApproved: !prevStatus.loanApproved,
        }));
        if (!status.loanApproved) {
          toast.success('Loan approved successfully');
        } else {
          toast('Loan approval status changed');
        }
      }
    } catch (error) {
      console.error("Error toggling loan approval:", error);
      toast.error('Loan approval status was not changed');
    } finally {
      setLoading(prevLoading => ({ ...prevLoading, loanApproved: false }));
    }
  };

  const handleLoanSanctionedToggle = async () => {
    if (!status.documentsVerified || !status.loanApproved) return;

    setLoading(prevLoading => ({ ...prevLoading, loanSanctioned: true }));
    console.log("Toggling loan sanctioned...");

    try {
      const response = await axios.post(
        "https://finmap.onrender.com/api/v1/loanSanctioned",
        { email: userData.email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );

      console.log("Response from loanSanctioned:", response.data);

      if (response.data.success) {
        setStatus(prevStatus => ({
          ...prevStatus,
          loanSanctioned: !prevStatus.loanSanctioned,
        }));
        if (!status.loanSanctioned) {
          toast.success('Loan sanctioned successfully');
        }
      }
    } catch (error) {
      console.error("Error toggling loan sanctioned:", error);
      toast.error('Unable to sanction loan');
    } finally {
      setLoading(prevLoading => ({ ...prevLoading, loanSanctioned: false }));
    }
  };

  if (!userData) {
    return <div> Loading</div>;
  }

  return (
    <div className="h-full py-4 pb-20 px-4 bg-white border-2">
      <div className="bg-gray-50 shadow-lg border rounded-md p-4 min-full pb-16">
        <button onClick={()=>navigate(-1)} className='text-white mb-4 bg-red-500 px-3 py-1 rounded-md'>Back</button>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(userData).map(([key, value]) => (
            <p key={key} className="text-slate-850">
              <span className="text-green-600">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
              </span> {value.toString()}
            </p>
          ))}
        </div>
        <div className="mt-8 font-mono">
          <div className="flex items-center space-x-4 gap-x-52">
            <div className="relative">
              <div className="rounded-full h-4 w-4 bg-orange-500"></div>
              <span className="absolute left-0 top-16 text-sm whitespace-nowrap">Documents Uploaded</span>
            </div>
            <div className="relative">
              <div
                className={`rounded-full h-4 w-4 cursor-pointer ${status.documentsVerified ? 'bg-yellow-500' : 'bg-gray-300'} ${loading.documentsVerified ? 'cursor-wait' : ''}`}
                onClick={handleDocumentsVerifiedToggle}
                style={{ pointerEvents: status.loanSanctioned || status.loanApproved ? 'none' : 'auto' }}
              ></div>
              <span className="absolute left-0 top-16 text-sm whitespace-nowrap">Documents Verified</span>
            </div>
            <div className="relative">
              <div
                className={`rounded-full h-4 w-4 cursor-pointer ${status.loanApproved ? 'bg-blue-500' : 'bg-gray-300'} ${loading.loanApproved ? 'cursor-wait' : ''}`}
                onClick={handleLoanApprovalToggle}
                style={{ pointerEvents: status.loanSanctioned || !status.documentsVerified ? 'none' : 'auto' }}
              ></div>
              <span className="absolute left-0 top-16 text-sm whitespace-nowrap">Loan Approved</span>
            </div>
            <div className="relative">
              <div
                className={`rounded-full h-4 w-4 cursor-pointer ${status.loanSanctioned ? 'bg-green-500' : 'bg-gray-300'} ${loading.loanSanctioned ? 'cursor-wait' : ''}`}
                onClick={(e)=>{
                  if(status.loanSanctioned===false){
                    handleLoanSanctionedToggle()
                  }
                }}
                style={{ pointerEvents: !status.loanApproved ? 'none' : 'auto' }}
              ></div>
              <span className="absolute left-0 top-16 text-sm whitespace-nowrap">Loan Sanctioned</span>
            </div>
          </div>
        </div>
        <div className="relative mt-8">
          <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-500"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
