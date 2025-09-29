import React from 'react';
import aboutImage from '../../img/AboutUs.jpg'; 

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        {/* <img src={aboutImage} alt="About Us" className="mx-auto mb-4" /> */}
        <div className='mt-16'/>
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-gray-700 mt-4">
          We believe every learner deserves access to quality education. Our mission is to provide free, high-quality learning for rural communities—covering schooling, vocational skills, digital literacy, and exam preparation.
        </p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-green-600">Our Story</h2>
          <p className="text-gray-700 mt-2">
            From small beginnings, we’ve grown into a community-led platform creating accessible learning content that works on low bandwidth and low-end devices. We partner with educators and volunteers to reach learners wherever they are.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-600">Contact Us</h2>
          <p className="text-gray-700 mt-2">
            Have questions or need assistance? Our team is here to help! Feel free to reach out to us via email, phone, or through our online contact form.
            We value your feedback and are committed to providing prompt and personalized support to address your inquiries and concerns.
          </p>
          <ul className="text-gray-700 mt-2 list-disc list-inside">
            <li>Email: <a href="mailto:info@finmap.com" className="text-green-600">info@finmap.com</a></li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-600">Volunteer & Partner</h2>
          <p className="text-gray-700 mt-2">
            Join us in building free education for rural learners. Volunteer as a mentor, contribute content, or partner with us to expand access and impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
