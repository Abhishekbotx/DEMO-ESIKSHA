import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CheckInCard = ({ data }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full">
            <div className="flex gap-4 text-sm text-gray-700">
                <div className='grid   lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-x-16 gap-y-1'>
                    <p><span className="font-semibold">_id: </span>{data._id}</p>
                    <p><span className="font-semibold">First Name: </span>{data.firstName}</p>
                    <p><span className="font-semibold">Email: </span>{data.email}</p>
                    <p><span className="font-semibold">Address1: </span>{data.address1}</p>
                    <p><span className="font-semibold">State: </span>{data.state}</p>
                    <p><span className="font-semibold">Gender: </span>{data.gender}</p>
                    <p><span className="font-semibold">Address2: </span>{data.address2}</p>
                    <p><span className="font-semibold">Pancard: </span>{data.pancard}</p>
                    <p><span className="font-semibold">Contact Number: </span>{data.contactNumber}</p>
                    <p><span className="font-semibold">Monthly Income: </span>{data.monthlyIncome}</p>
                    {/* <p><span className="font-semibold">Documents Verified: </span>{data.documentsVerified ? 'true' : 'false'}</p> */}
                    {/* <p><span className="font-semibold">Loan Approved: </span>{data.loanApproved ? 'true' : 'false'}</p> */}
                    <p><span className="font-semibold">Updated At: </span>{new Date(data.updatedAt).toISOString()}</p>
                    <p><span className="font-semibold">Aadharcard: </span>{data.aadharcard}</p>
                    <p><span className="font-semibold">Employer Name: </span>{data.employerName}</p>
                    {/* <p><span className="font-semibold">Documents Uploaded: </span>{data.documentsUploded ? 'true' : 'false'}</p> */}
                    {/* <p><span className="font-semibold">Loan Sanctioned: </span>{data.loanSanctioned ? 'true' : 'false'}</p> */}
                    
                    {/* <p><span className="font-semibold">__v: </span>{data.__v}</p> */}
                </div>
                
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="bg-orange-500 h-3 w-3 rounded-full"></div>
                <div className="bg-yellow-500 h-3 w-3 rounded-full"></div>
                <div className="bg-blue-500 h-3 w-3 rounded-full"></div>
                <div className="bg-green-500 h-3 w-3 rounded-full"></div>
            </div>
            <div className="h-1 bg-green-500 mt-2 rounded-full"></div>
            <div className="flex justify-between text-xs mt-2 text-gray-500">
                <p>Documents Uploaded</p>
                <p>Documents Verified</p>
                <p>Loan Approved</p>
                <p>Loan Sanctioned</p>
            </div>
        </div>
    );
};

export default CheckInCard;
