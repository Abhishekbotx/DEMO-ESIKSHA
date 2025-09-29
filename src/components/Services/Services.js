import React from 'react';
import serviceImage from '../../img/services.jpg'; 
import { FaHandHoldingUsd, FaCreditCard, FaChartLine } from 'react-icons/fa'; // Import icons from react-icons library

const Services = () => {
  return (
    <div className="container mx-auto p-6">
      
      <div className="text-center mb-8 pt-12">
        <h1 className="text-3xl font-bold text-green-600">Our Services</h1>
        <div className="flex justify-center mt-4">
          <img src={serviceImage} alt="Customer Education" className="w-full max-w-md" />
        </div>
        </div>

      
      <div className="space-y-8">
       
        <div>
          {/* <h2 className="text-2xl font-bold text-green-600">Our Services</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <FaChartLine className="text-green-600 text-3xl mb-4" />
              <h3 className="font-bold text-xl mb-2">Credit Score Monitoring</h3>
              <p className="text-gray-700 text-center">
                Stay updated on your credit health with our credit score monitoring service. Track changes, receive alerts, and understand factors impacting your score.
              </p>
            </div>
          
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <FaHandHoldingUsd className="text-green-600 text-3xl mb-4" />
              <h3 className="font-bold text-xl mb-2">Loan Application Assistance</h3>
              <p className="text-gray-700 text-center">
                Navigate the loan application process smoothly with our assistance. From understanding eligibility criteria to submitting documents, we've got you covered.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <FaCreditCard className="text-green-600 text-3xl mb-4" />
              <h3 className="font-bold text-xl mb-2">Financial Planning</h3>
              <p className="text-gray-700 text-center">
                Plan your financial future with confidence using our financial planning service. Set goals, create budgets, and track your progress towards financial success.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Services;
