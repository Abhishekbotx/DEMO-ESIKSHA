import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateReview = () => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('Picture', avatar);
      formData.append('name', name);
      formData.append('profession', profession);
      formData.append('review', review);
      formData.append('rating', rating.toString());

      const response = await axios.post(
        'https://finmap.onrender.com/api/v1/Admin/addReview',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      if (response.data.success === true) {
        toast.success('Review created successfully');
        setTimeout(() => {
          navigate('/privatezxl-reviews');
        }, 1000);
      }
    } catch (error) {
      toast.error('Unable to create review');
    }
  };

  const handleImageUpload = (event) => {
    setAvatar(event.target.files[0]);
  };

  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-8">
          <h2 className="text-3xl font-semibold">Create Review</h2>
          <Link
            to="/privatezxl-reviews"
            className="bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
            Back to Reviews
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4 flex space-x-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-400 rounded-md py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label htmlFor="profession" className="block text-gray-700 font-bold mb-2">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                placeholder="Enter Profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="border border-gray-400 rounded-md py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="file-upload" className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <div className="flex items-center">
              <label htmlFor="file-upload" className="cursor-pointer mr-4 border-2 rounded-md px-2 py-1">
                Select File
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              {avatar && <span>{avatar.name}</span>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="review" className="block text-gray-700 font-bold mb-2">
              Review
            </label>
            <textarea
              id="review"
              placeholder="Write a Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="border border-gray-400 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
              Rating
            </label>
            <input
              id="rating"
              placeholder="Enter Rating Out of Five"
              value={rating}
              onChange={(e) => setRating(e.target.value)}

              required
              className="border border-gray-400 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              min="0"
              max="5"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
