import React from 'react';
import faqImage from '../../img/Faq.jpg'; // Update the path to your actual image

const CustomerEducation = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8 pt-12">
        <h1 className="text-3xl font-bold text-green-600">FAQ</h1>
        <div className="flex justify-center mt-4">
          <img src={faqImage} alt="Customer Education" className="w-full max-w-md" />
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-green-600">1. Who can use this platform?</h3>
          <p className="text-gray-700 mt-2">Anyone can learn here—especially rural learners, teachers, and parents.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-green-600">2. Is all content free?</h3>
          <p className="text-gray-700 mt-2">Yes. Courses, notes, quizzes, and videos are free to access.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-green-600">3. Can I learn on a low-end phone?</h3>
          <p className="text-gray-700 mt-2">Yes. Content is optimized for low bandwidth and small screens.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-green-600">4. How do I start?</h3>
          <p className="text-gray-700 mt-2">Visit Courses to pick a category, then use Resources for notes and practice.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerEducation;
