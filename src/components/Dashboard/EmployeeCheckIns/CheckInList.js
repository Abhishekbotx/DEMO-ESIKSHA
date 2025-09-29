import React, { useEffect, useState } from 'react';
import CheckInCard from './CheckInCard';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckInList = ({ data }) => {
    const [employeeData, setEmployeeData] = useState([])
    const { employeeId } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("https://finmap.onrender.com/api/v1/getCustomerByEmployeeId",
                    { id: employeeId }, {

                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                });
                console.log('response data', response.data);
                setEmployeeData(response.data.data)
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }

        }
        fetchData()

    }, [])

    return (
        <>

            <Link
                to={'/privatezxl-dashboard'}
                className="bg-gray-200 relative top-4 left-4  px-3 py-2 mb-3 text-black  rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center w-40"
            >
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                </svg>
                Back to Home
            </Link>

            <div className="flex flex-wrap justify-center">

                {employeeData.map((item) => (
                    <CheckInCard key={item._id} data={item} />
                ))}
            </div>
        </>
    );
};

export default CheckInList;