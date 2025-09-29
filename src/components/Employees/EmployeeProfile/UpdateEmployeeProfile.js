import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/auth';
import { toast } from 'react-toastify';

const EmployeeProfileComp = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [adminId, setAdminId] = useState('');
  const [accountType, setAccountType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [newImageName, setNewImageName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [auth, setAuth] = useAuth();
  
  const [gender, setGender] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = auth.employee;
        const response = await axios.post(
          "https://finmap.onrender.com/api/v1/getEmployee",
          { email },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        const userData = response.data.data;
        console.log('logging respone:',userData);
        setData(userData);
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setEmail(userData.email);
        setPhoneNo(userData.contactNumber);
        setAdminId(userData._id);
        setCompanyName(userData.companyName);
        setAccountType(userData.accountType);
        setProfileImage(userData.image);
        setGender(userData.gender || '');
        setEmploymentStatus(userData.employmentStatus || '');
        setDateOfBirth(userData.dateOfBirth || '');
        setAddress(userData.address || '');
        setEmergencyContact(userData.emergencyContact || '');
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, [auth.admin]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
    setNewImageName(file.name);
    setShowModal(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderProfileImage = () => {
    if (profileImage instanceof File) {
      return URL.createObjectURL(profileImage);
    }
    return profileImage ? `https://finmap.onrender.com/employeeProfileImages/${profileImage}` : 'https://via.placeholder.com/150';
  };

  const handleImageUpdate = async () => {
    const formData = new FormData();
    formData.append('Picture', profileImage);
    formData.append('email', auth.employee);
    try {
      const response = await axios.put(
        'https://finmap.onrender.com/api/v1/updateDisplayPicture',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      if (response.data.success===true) {
        toast.success('display picture successfully updated')
        setShowModal(false);
      }else{
        toast.error('display picture was not updated')
      }
    } catch (error) {
        toast.error('display picture was not updated')
    //   console.error('Error updating image:', error);
    }
  };

  const handleFormUpdate = async () => {
    try {
      const response = await axios.put(
        'https://finmap.onrender.com/api/v1/updateProfile',
        { email:auth.employee,  
          firstName,
          lastName,
          contactNumber:phoneNo,
          gender,
          employmentStatus,
          dateOfBirth,
          address,
          emergencyContact
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success('Profile successfully updated');
      } else {
        toast.error('Profile update failed');
      }
    } catch (error) {
      toast.error('Profile update failed');
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-green-100 translate-x-20 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Update Profile Image</h2>
              <button onClick={() => setShowModal(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <img src={renderProfileImage()} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4 mx-auto" />
            <button
              onClick={handleImageUpdate}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            >
              Update Image
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center mb-4">
        <div className="relative mr-4 mb-4">
          <img
            src={renderProfileImage() }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-md"
            style={{
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.4)',
              border: '4px solid white',
            }}
          />
          <label htmlFor="image-upload" className="relative  bottom-8 right-0 left-20  cursor-pointer ">
            <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </label>
          <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </div>
        <div className="text-center">
          <span className="text-gray-700 font-bold">{firstName} {lastName}</span>
          <br />
          <span className="text-gray-500">{accountType}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            First Name
          </label>
          <input
            id="name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Last Name
          </label>
          <input
            id="name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            value={email}
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="phoneNo" className="block text-gray-700 font-bold mb-2">
            Phone No
          </label>
          <input
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            type="text"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="adminId" className="block text-gray-700 font-bold mb-2">
            Admin Id
          </label>
          <input
            id="adminId"
            value={adminId}
            type="text"
            placeholder="Enter your admin ID"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={'dummyPassword'}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              readOnly
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
            Company Name
          </label>
          <input
            id="companyName"
            type="text"
            value={'Finmap'}
            placeholder="Enter your company name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
            Gender
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
        </div>
        <div>
          <label htmlFor="employmentPosition" className="block text-gray-700 font-bold mb-2">
            Employment Position
          </label>
          <select
            id="employmentPosition"
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Position</option>
            <option value="manager">Manager</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="analyst">Analyst</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="emergencyContact" className="block text-gray-700 font-bold mb-2">
            Emergency Contact
          </label>
          <input
            id="emergencyContact"
            type="text"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
            placeholder="Enter emergency contact number"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleFormUpdate}
          className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EmployeeProfileComp;
