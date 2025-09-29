import React from 'react';
import businessImage from '../img/business-image.png';
import personalImage from '../img/personal-image.png';

const Financing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mb-8 md:mb-16">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 order-2 md:order-1">
          <img
            src={businessImage}
            alt="Students learning together"
            className="rounded-lg shadow-lg mr-0 md:mr-40 max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Your one place for free learning
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Learn at your pace with free courses and resources designed for rural learners.
            Explore schooling subjects, vocational skills, digital literacy, and exam preparation—
            available anytime, even on low bandwidth devices.
          </p>
          <div className="flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md">
              Start Learning
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-16 max-w-4xl">
        <div className="md:w-1/2 mr-0 md:mr-28 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-2xl font-bold mb-4">How Learning Works</h2>
          <h3 className="text-xl font-semibold mb-4">Simple, Flexible, Community-led</h3>
          <p className="text-gray-600 mb-4">
            Our mentors and contributors help you learn effectively with practical, local examples.
          </p>
          <ul className="list-disc pl-4">
            <li className="text-gray-600 mb-2">Structured modules and short videos</li>
            <li className="text-gray-600 mb-2">Notes, quizzes, and downloadable e-books</li>
            <li className="text-gray-600 mb-2">Works offline with printable materials</li>
            <li className="text-gray-600 mb-2">Safe, ad-free learning space</li>
            <li className="text-gray-600 mb-2">Guidance for teachers and parents</li>
          </ul>
        </div>
        <div className="md:w-1/2 mb-0 flex justify-center">
          <img
            src={personalImage}
            alt="Digital literacy and learning"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Financing;
 