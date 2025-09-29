import React from "react";
import backgroundImage from "../img/homepage.png";
import { useNavigate } from 'react-router-dom';
//import CustomShape from '../img/curv.svg';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="bg-cover min-h-screen relative"
        style={{ 
        backgroundImage: `url(${'https://images.pexels.com/photos/33313768/pexels-photo-33313768.jpeg'})`,
        backgroundSize: 'cover',
        backgroundPositionX:'left',
        backgroundPositionY:'bottom',
        backdropFilter: 'blur(20px)'  
      }}
      >
        {/* Main content */}
        <main className="mt-16 flex flex-col items-center justify-center mb-28 px-4 md:px-0 ">
        <h1 className="text-2xl md:text-4xl py-10 px-3 rounded-md font-bold lg:text-white-900 text-gray-300 bg-slate-300 bg-transparent text-center mb-4 mt-10 backdrop-blur-xl">
  Free education for rural learners
</h1>
<p className="lg:text-white-900 py-6 px-3 text-gray-300 rounded-lg bg-slate-300 backdrop-blur-xl bg-transparent font-semibold text-center mb-8">
  Learn at no cost with courses, resources, and community support. 
  Access schooling, vocational skills, digital literacy, and exam prep—anytime, anywhere.
</p>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-16">
            <button onClick={() => navigate('/courses')} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4 md:mb-0">
              Explore Courses
            </button>
            <button onClick={() => navigate('/resources')} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded mb-4 md:mb-0">
              Free Resources
            </button>
            <button onClick={() => navigate('/aboutUs')} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
              About Us
            </button>
          </div>
        </main>
        <div className="bg-black text-white py-8 overflow-hidden px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="rounded-l-full bg-black h-24 w-24 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-center px-0 md:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-0 mr-0 md:mr-60">
                India's Leading Digital learning Platform
              </h2>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold">10+</h3>
                  <p className="text-sm">Years of experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold">50k</h3>
                  <p className="text-sm">Satisfied customers</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold">20+</h3>
                  <p className="text-sm">Trusted partners</p>
                </div>
              </div>
            </div>
            <div className="rounded-r-full bg-black h-24 w-24 hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

 