import React from 'react';

const NewEmployeeDetails = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">New employee details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            firstname
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter firstname"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            lastname
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter lastname"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            email
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="panNo" className="block text-gray-700 font-bold mb-2">
            PAN No
          </label>
          <input
            type="text"
            id="panNo"
            placeholder="Enter PAN number"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="phoneNo" className="block text-gray-700 font-bold mb-2">
            Phone No
          </label>
          <input
            type="text"
            id="phoneNo"
            placeholder="Enter phone number"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            placeholder="Enter age"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="department" className="block text-gray-700 font-bold mb-2">
            Department
          </label>
          <input
            type="text"
            id="department"
            placeholder="Enter department"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="position" className="block text-gray-700 font-bold mb-2">
            Position
          </label>
          <input
            type="text"
            id="position"
            placeholder="Enter position"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="employeeType" className="block text-gray-700 font-bold mb-2">
            Employee Type
          </label>
          <input
            type="text"
            id="employeeType"
            placeholder="Enter employee type"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="dateOfJoining" className="block text-gray-700 font-bold mb-2">
            Date of Joining
          </label>
          <input
            type="text"
            id="dateOfJoining"
            placeholder="Enter date of joining"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="employeeId" className="block text-gray-700 font-bold mb-2">
            Employee Id
          </label>
          <input
            type="text"
            id="employeeId"
            placeholder="Enter employee ID"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="accessPermission" className="block text-gray-700 font-bold mb-2">
            Access Permission
          </label>
          <select
            id="accessPermission"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select access permission</option>
            <option value="Full Access">Full Access</option>
            <option value="Limited Access">Limited Access</option>
          </select>
        </div>
        {/* Add more fields as needed */}
        <div>
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="flex justify-center">  
      <button
        className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
      </div>
    </div>
  );
};

export default NewEmployeeDetails;

 