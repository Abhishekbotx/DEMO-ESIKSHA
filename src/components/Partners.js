import React from 'react';
import Marquee from "react-fast-marquee";
import './styles.css';

const LogoSlider = () => {
  const educationPartners = [
    {
      src: 'https://e7.pngegg.com/pngimages/997/403/png-clipart-khan-academy-full-logo-tech-companies.png',
      alt: 'Khan Academy'
    },
    {
      src: 'https://naseej.com/wp-content/uploads/2025/05/coursera-logo-full-rgb-1024x331.webp',
      alt: 'Coursera'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlscAvljO6d6IJo8aanhISXBx1g8MxjmJF7g&s',
      alt: 'edX'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Byju%27s_logo.svg/1200px-Byju%27s_logo.svg.png',
      alt: "BYJU'S"
    },
    {
      src: 'https://1000logos.net/wp-content/uploads/2022/09/Unacademy-Logo.png',
      alt: 'Unacademy'
    },
    {
      src: 'https://play-lh.googleusercontent.com/jUhCRWwTdZu46Xu1WDvTgBH35yDH0FzH7Dc7EIqqvL1IeUhbAop-bCcGarcCUK2tuy8',
      alt: 'SWAYAM'
    },
    {
      src: 'https://internalapp.nptel.ac.in/B2C/exam_form/images/logo.png',
      alt: 'NPTEL'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TED_three_letter_logo.svg/1280px-TED_three_letter_logo.svg.png',
      alt: 'TED-Ed'
    }
  ];
  return (
    <div className="overflow-x-hidden py-10 bg-slate-100 relative">
      <h1 className="text-3xl font-bold text-center mb-10">Learning with our education partners</h1>
      <Marquee 
      speed={100} 
      gradient={true}
      // gradientColor={' bg-'} // white gradient
        gradientWidth={100}
        pauseOnHover={true}
      >
        {educationPartners.map((p) => (
          <img key={p.alt} src={p.src} alt={p.alt} className="h-8 md:h-12 mx-10 md:mx-10" />
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;
