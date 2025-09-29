import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://finmap.onrender.com/api/v1/getAllNews", {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
        if (response.data.success === true) {
          console.log('response data:', response.data.data);
          setNewsData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsData.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (event) => {
    setCurrentPage(Number(event.target.textContent));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(newsData.length / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const handleDelete = async (articleId) => {
    try {
      const response = await axios.post("https://finmap.onrender.com/api/v1/Admin/deleteNews",
        {
          newsId:articleId
          
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
      if (response.data.success === true) {
        setNewsData(newsData.map(article =>
          article._id === articleId
            ? { ...article, deleted: true }
            : article
        ));
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between mb-4 px-2 py-2">
        <h2 className="text-3xl font-bold">Article</h2>
        <div>
          <Link
            to="/create-article-news"
            className="bg-gray-200 text-black py-2 px-4 pt-3 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center"
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
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Create Article
          </Link>
        </div>
      </div>
      {currentArticles.map((article, index) => (
        <div key={index} className="relative flex items-center mb-8 border  border-gray-300 rounded-lg shadow-md p-6 group">
          {article.deleted ? (
            <div className="text-center w-full">
              <p className="text-red-500 text-xl">News was deleted</p>
            </div>
          ) : (
            <>
              <div className='flex flex-col w-2/3'>
                <div className='flex items-center gap-x-3 mb-2'>
                  <div className='w-16 h-16 rounded-full bg-green-200'>
                    {article.editorImage && (
                      <img src={`https://finmap.onrender.com/editorImages/${article.editorImage}`} alt={article.editorName} className="w-full h-full rounded-full object-cover" />
                    )}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xl font-semibold">{article.editorName}</p>
                    <p className="text-gray-500 text-xs">{new Date(article.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">{article.newsName}</h2>
                <p className="text-gray-700">{truncateText(article.description, 150)}</p>
              </div>
              <div className="w-1/3 ml-4 transform transition-transform duration-300 group-hover:-translate-y-4  group-hover:scale-90">
                <img
                  src={`https://finmap.onrender.com/newsImage/${article.newsImage}`}
                  alt={article.newsName}
                  className="w-full h-48 object-cover rounded-lg"
                  style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                />
              </div>
              <button
                onClick={() => handleDelete(article._id)}
                className="hidden group-hover:block absolute bottom-2 right-9 bg-red-600 text-white py-1 px-3 rounded transition-opacity duration-300"
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
      <div className="flex justify-center my-4">
        <nav aria-label="Page navigation">
          <ul className="flex list-style-none">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 rounded-l"
              >
                &lt;&lt;
              </button>
            </li>
            {pageNumbers.map(number => (
              <li key={number}>
                <button
                  onClick={handlePageChange}
                  className={`border border-gray-300 text-gray-500 hover:bg-gray- hover:text-gray-700 leading-tight py-2 px-3 ${currentPage === number ? 'bg-white text-green-500' : 'bg-white'}`}
                >
                  {number}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 rounded-r"
              >
                &gt;&gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Articles;
