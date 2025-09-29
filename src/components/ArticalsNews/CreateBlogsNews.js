import React, { useState } from 'react';

const CreateNews = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [headline, setHeadline] = useState('');
  const [date, setDate] = useState('');
  const [poster, setPoster] = useState('');
  const [readmore, setReadmore] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can make an API call or update the review data in your application

    // Clear form fields after submission
    setName('');
    setAvatar('');
    setHeadline('');
    setDate('');
    setPoster('');
    setReadmore('');
   };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-8">
          <h2 className="text-3xl font-semibold">Create Blogs & News</h2>
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
                className="border border-gray-400 rounded-md py-2 px-2 w-half focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="avatar" className="block text-gray-700 font-bold mb-2">
              Avatar URL
            </label>
            <input
              type="text"
              id="avatar"
              placeholder="Enter Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="border border-gray-400 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
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
                className="border border-gray-400 rounded-md py-2 px-2 w-half focus:outline-none focus:ring-2 focus:ring-green-400"
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
                className="border border-gray-400 rounded-md py-2 px-2 w-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
           <div className="mb-4">
            <label htmlFor="poster" className="block text-gray-700 font-bold mb-2">
              Article Poster URL
            </label>
            <input
              type="text"
              id="poster"
              placeholder="Enter Article Poster URL"
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
              className="border border-gray-400 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="readmore" className="block text-gray-700 font-bold mb-2">
              News Read More URL
            </label>
            <input
              type="text"
              id="readmore"
              placeholder="Enter News Readmore URL"
              value={readmore}
              onChange={(e) => setReadmore(e.target.value)}
              className="border border-gray-400 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Create Blogs & News
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNews;
 