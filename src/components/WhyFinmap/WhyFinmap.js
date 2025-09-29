import React from 'react';
import Image from '../../img/whyfinmap.jpg'
const WhyFinmap = () => {
  return (
    <div className="container mx-auto p-6">
        <div
        className='mt-4'
        >
            <img src={Image}></img>
        </div>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-green-600">Why Finmap</h1>
        <p className="text-gray-700 mt-4">
          We streamline the loan process by examining your credit, income, property, and business particulars.
          We tailor banking solutions to fit your individual circumstances, enhancing your approval odds and securing advantageous terms.
          Our cohesive approach guarantees a seamless and effective journey, guiding you through each stage effortlessly.
        </p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-green-600">• Loan Eligibility Check:</h2>
          <p className="text-gray-700 mt-2">
            Determine your eligibility for various business loan products by providing essential details such as your business type,
            annual revenue, years in operation, and credit score. Our instant assessment helps you understand your borrowing potential
            without any hassle.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-600">• Loan Products Overview:</h2>
          <p className="text-gray-700 mt-2">
            Gain insights into the diverse range of business loans available in the Indian market. Explore term loans, lines of credit,
            equipment financing, and more. Understand the unique features, benefits, and suitability of each loan type for different business requirements.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-600">• Eligibility Criteria:</h2>
          <p className="text-gray-700 mt-2">
            Dive deep into the eligibility criteria for business loans in India. Understand the intricate details and factors such as
            business vintage, annual turnover, credit history, and industry type that lenders consider during the loan evaluation process.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-600">• Verification:</h2>
          <p className="text-gray-700 mt-2">
            Quickly verify employment and income information with some of the most smart and seamless features.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-600">• Educational Resources:</h2>
          <p className="text-gray-700 mt-2">
            Access a wealth of informative articles, guides, and FAQs to enhance your understanding of business financing options,
            loan application procedures, and best practices for managing business finances. Equip yourself with knowledge to make
            sound financial decisions for your business's growth and success.
          </p>
        </div>
      </div>

      <div className="text-gray-700 mt-12">
        <p>
          With Finmap, you have the tools and resources at your fingertips to make informed decisions about your business financing needs.
          Explore now and unlock the possibilities for fueling your business's growth journey.
        </p>
      </div>
    </div>
  );
};

export default WhyFinmap;
