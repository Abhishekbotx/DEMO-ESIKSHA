import React from 'react';
import Navbar from '../Navbar';
// import Footer from '../Footer';
// import Navbar from '../Navbar';

const Resources = () => {
  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <p className="mb-8 text-gray-700">Explore free e-books, notes, quizzes, and videos.</p>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="#ebooks" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Quick Link: E-books</a>
        <a href="#notes" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Quick Link: Notes</a>
        <a href="#quizzes" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Quick Link: Quizzes</a>
        <a href="#videos" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Quick Link: Videos</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="ebooks" className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">E-books</h2>
          <p className="text-gray-600">Downloadable PDFs across school and vocational topics.</p>
        </div>
        <div id="notes" className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Notes</h2>
          <p className="text-gray-600">Concise, exam-focused summaries and examples.</p>
        </div>
        <div id="quizzes" className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Quizzes</h2>
          <p className="text-gray-600">Practice questions with instant feedback.</p>
        </div>
        <div id="videos" className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Videos</h2>
          <p className="text-gray-600">Short, easy-to-understand lessons.</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Resources;


