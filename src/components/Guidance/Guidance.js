import React from 'react';

const Guidance = () => {
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Guidance for Teachers & Parents</h1>
      <div className="space-y-6 text-gray-800">
        <section className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Teaching Support</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Lesson plans and activity ideas</li>
            <li>Assessment checklists and rubrics</li>
            <li>Inclusive teaching strategies</li>
          </ul>
        </section>
        <section className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Parent Guidance</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Creating a learning routine at home</li>
            <li>Low-tech learning activities</li>
            <li>Motivation and well-being tips</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Guidance;


