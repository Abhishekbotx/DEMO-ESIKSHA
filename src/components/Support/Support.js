import React, { useState } from 'react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    details: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the form submission logic here (e.g., send data to the backend)
    setFormSubmitted(true);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-600">Support</h1>
        <p className="text-gray-700 mt-4">
          Need help? Our support team is here to assist you with any issues or questions you may have.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600">Frequently Asked Questions</h2>
          <div className="mt-4">
            <h3 className="font-bold text-lg">1. How can I reset my password?</h3>
            <p className="text-gray-700 mt-2">
              To reset your password, click on the "Forgot Password" link on the login page and follow the instructions to reset your password.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg">2. How do I contact customer support?</h3>
            <p className="text-gray-700 mt-2">
              You can contact our customer support team by filling out the form below or by emailing us at support@finmap.com.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg">3. How can I update my account information?</h3>
            <p className="text-gray-700 mt-2">
              To update your account information, log in to your account and navigate to the "Account Settings" section.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600">Contact Support</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="issue">
                Issue
              </label>
              <input
                type="text"
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="details">
                Details
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Submit
            </button>
            {formSubmitted && (
              <div className="mt-4 text-green-600 font-bold text-center">
                Thank you for contacting us! We will get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
