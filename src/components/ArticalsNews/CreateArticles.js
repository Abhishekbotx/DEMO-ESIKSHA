import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateArticles = () => {
  const [headline, setHeadline] = useState('');
  const [editorName, setEditorName] = useState('');
  const [date, setDate] = useState('');
  const [poster, setPoster] = useState(null);
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState(null);
  const navigate =useNavigate()

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = formatDate(date);
      console.log(formattedDate);
      const formData = new FormData();
      formData.append('newsImage', poster);
      formData.append('editorImage', avatar);
      formData.append('newsName', headline);
      formData.append('editorName', editorName);
      formData.append('description', description);
      formData.append('newsDate', formattedDate); 
      const response = await axios.post(
        'https://finmap.onrender.com/api/v1/Admin/addNews',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      if (response.data.success === true) {
        toast.success('news created successfully');
        setTimeout(() => {
          navigate('/articles-news');
        }, 1000);
      }
    } catch (error) {
      toast.error('unable to create review');
    }
  };

  const handlePosterUpload = (event) => {
    setPoster(event.target.files[0]);
  };

  const handleAvatarUpload = (event) => {
    setAvatar(event.target.files[0]);
  };

  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-8">
          <h2 className="text-3xl font-semibold">Create Article</h2>
          <Link
            to="/articles-news"
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
            Back to Articles
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4 flex space-x-4">
            <div>
              <label htmlFor="Article Headline" className="block text-gray-700 font-bold mb-2">
                Article Headline
              </label>
              <input
                type="text"
                id="Article Headline"
                placeholder="Enter Article Headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="border border-gray-400 rounded-md py-2 px-2 w-half focus:outline-none focus:ring-2 focus:ring-pink-900"
                required
              />
            </div>
            <div>
              <label htmlFor="Editor Name" className="block text-gray-700 font-bold mb-2">
                Editor Name
              </label>
              <input
                type="text"
                id="Editor Name"
                placeholder="Enter Editor Name"
                value={editorName}
                onChange={(e) => setEditorName(e.target.value)}
                className="border border-gray-400 rounded-md py-2 px-2 w-half focus:outline-none focus:ring-2 focus:ring-pink-900"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                Article Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-400 rounded-md py-2 px-2 w-100 focus:outline-none focus:ring-2 focus:ring-pink-900"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="poster-upload" className="block text-gray-700 font-bold mb-2">
              Article Image
            </label>
            <div className="flex items-center">
              <label htmlFor="poster-upload" className="cursor-pointer mr-4 border-2 rounded-md px-2 py-1">
                Select File
              </label>
              <input
                id="poster-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePosterUpload}
              />
              {/* Display Selected File Name */}
              {poster && <span>{poster.name}</span>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="avatar-upload" className="block text-gray-700 font-bold mb-2">
              Editor Image
            </label>
            <div className="flex items-center">
              <label htmlFor="avatar-upload" className="cursor-pointer mr-4 border-2 rounded-md px-2 py-1">
                Select File
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarUpload}
              />
              {/* Display Selected File Name */}
              {avatar && <span>{avatar.name}</span>}
            </div>
          </div>
          <div className="mb-4 flex flex-col min-h-24">
            <label htmlFor="description" className=" text-gray-700 font-bold mb-2">
              Article Description
            </label>
            <textarea
              id="description"
              placeholder="Write an Article Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-400 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-900"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Create Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateArticles;
