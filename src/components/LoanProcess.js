import React from 'react';
import './styles.css';
import accept from '../img/accept.svg';
import approve from '../img/approve.svg';
import terms from '../img/terms.svg';
import time from '../img/time.svg';
import secure from '../img/secure.svg';
import report from '../img/report.svg';

const LoanProcess = () => {
  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center"> 
          <h2 className="text-3xl font-bold mb-6">Never worry about loans again</h2>
          <p className="text-gray-300 mb-12">
            We streamline the loan process by examining your credit, income, property, and business particulars. We tailor banking solutions to fit your individual circumstances, enhancing your approval odds and securing advantageous terms. Our cohesive approach guarantees a seamless and effective journey, guiding you through each stage effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <img src={accept} alt="Seamless Process" className="rounded-full w-16 h-16" />
            </div>
            <h3 className="font-semibold">Seamless process</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <img src={approve} alt="Boost's approval rate" className="rounded-full w-16 h-16" />
            </div>
            <h3 className="font-semibold">Boost's approval rate</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <img src={terms} alt="Favourable loan terms" className="rounded-full w-16 h-16" />
            </div>
            <h3 className="font-semibold">Favourable loan terms</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <img src={time} alt="Time saving" className="rounded-full w-16 h-16" />
            </div>
            <h3 className="font-semibold">Time saving</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <img src={secure} alt="Secure & Private" className="rounded-full w-16 h-16" />
            </div>
            <h3 className="font-semibold">Secure &amp; Private</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <img src={report} alt="Tailored solutions" className="rounded-full w-16 h-16" />
            </div>
            <h3 className="font-semibold">Tailored solutions</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanProcess;

 