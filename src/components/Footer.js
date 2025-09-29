import React from 'react';
import '../App.css'
import { NavLink, useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate=useNavigate()
  return (
    <footer className="text-white mt-20 max-w[100%]">
      <div className='w-[100%] bg-black bg relative -z-10 top-1  h-12 sm:  semi-circle'></div>
      <div className="bg-black py-8">
        <div className="container w-10/12 mx-auto  sm:text-center  px-4 -mt-32">
          <div className="bg-orange-300  shadow-slate-950 rounded-lg py-8 px-6 text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Need help with learning?</h2>
            <p className="mb-4">
              Share feedback or ask for support. We usually reply within 2–3 working days.
            </p>
            <button onClick={()=>navigate('/contactUs')} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              Help & Feedback
            </button>
          </div>
          <div className="flex flex-wrap -mx-4 smallscreen">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 ">
              <h3 className="text-lg font-bold mb-2">Learn</h3>
              <ul className='flex flex-col'>
                <NavLink to={'/courses'}>Courses</NavLink>
                <NavLink to={'/resources'}>Resources</NavLink>
                <NavLink to={'/guidance'}>Teacher/Parent</NavLink>
                <NavLink to={'/community'}>Community</NavLink>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 ">
              <h3 className="text-lg font-bold mb-2">Help</h3>
              <ul className=' flex flex-col'>
                <NavLink to={'/contactUs'}>Help & Feedback</NavLink>
                <NavLink to={'/faq'}>FAQ</NavLink>
                <NavLink to={'/support'}>Support</NavLink>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 ">
              <h3 className="text-lg font-bold mb-2">About</h3>
              <ul className=' flex flex-col'>
                <NavLink to={'/aboutUs'}>About Us</NavLink>
                <NavLink to={'/tcs'}>Terms & Conditions</NavLink>
                <NavLink to={'/privacyPolicy'}>Privacy Policy</NavLink>
              </ul> 
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; 2025 Free Rural Education. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;