import React from 'react';

const SubAdminDetails = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Sub admin details</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">User Id</label>
          <input
            type="text"
            placeholder="User Id"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <h3 className="text-lg font-bold mb-4">User data</h3>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Full name</label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <input
            type="text"
            placeholder="Gender"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Date of Birth</label>
          <input
            type="text"
            placeholder="Date of Birth"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block font-medium mb-1">House/Apartment No</label>
          <input
            type="text"
            placeholder="House/Apartment No"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Street/Area/ Locality</label>
          <input
            type="text"
            placeholder="Street/Area/ Locality"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Pin Code</label>
          <input
            type="text"
            placeholder="Pin Code"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block font-medium mb-1">State/Union territory</label>
          <input
            type="text"
            placeholder="State/Union territory"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">PAN No</label>
          <input
            type="text"
            placeholder="PAN No"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Guaranteer PAN No</label>
          <input
            type="text"
            placeholder="Guaranteer PAN No"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Aadhar No</label>
          <input
            type="text"
            placeholder="Aadhar No"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Phone No</label>
          <input
            type="text"
            placeholder="Phone No"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Employment Type</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="job">Employment Type</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Employer Name</label>
          <input
            type="text"
            placeholder="Employer Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Monthly Income</label>
          <input
            type="text"
            placeholder="Monthly Income"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SubAdminDetails;
