import React from 'react';
import Navbar from '../Navbar';

const Community = () => {
  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto">
        <Navbar/>
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      <p className="mb-6 text-gray-700">Connect, learn, and give back. Join discussions, share stories, and volunteer.</p>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="#stories" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Read Stories</a>
        <a href="#forum" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Visit Forum</a>
        <a href="#volunteer" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Become a Volunteer</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section id="stories" className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Stories</h2>
          <p className="text-gray-600">Real experiences from learners and mentors.</p>
        </section>
        <section id="forum" className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Forum</h2>
          <p className="text-gray-600">Ask questions and share solutions.</p>
        </section>
        <section id="volunteer" className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Volunteer</h2>
          <p className="text-gray-600">Support teaching, mentoring, and content creation.</p>
        </section>
      </div>
    </div>
  );
};

export default Community;


