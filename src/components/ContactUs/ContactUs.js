import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://finmap.onrender.com/api/v1/checkIn",
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log('response on screen:',response.status);
      if (response.status === 200) {
        toast.success('Your request was sent!');
        setFormSubmitted(true);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer />
      <div className="text-center mb-8 mt-12">
        <h1 className="text-3xl font-bold text-green-600">Help & Feedback</h1>
        <p className="text-gray-700 mt-4">
          Tell us how we can improve learning for rural students. Share issues, ideas, or ask for help—our team will respond soon.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600">Contact Information</h2>
          <p className="text-gray-700 mt-2">Email: <a href="mailto:eshiksha@gmail.com" className="text-green-500">eshiksha@gmail.com</a></p>
          <p className="text-gray-700 mt-2">Phone: <a href="tel:+1234567890" className="text-green-500">+1234567890</a></p>
          <p className="text-gray-700 mt-2">Response Time: within 2–3 working days</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600">Send Us a Message</h2>
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
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
              Send Message
            </button>
            {formSubmitted && (
              <div className="mt-4 text-green-600 font-bold text-center">
                Thank you for your message! We will get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
