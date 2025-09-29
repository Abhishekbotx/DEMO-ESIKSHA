import React, { useEffect, useState } from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewsDetail = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);

  useEffect(() => {
    console.log('params check',newsId);
    async function fetchNews() {
      try {
        const response = await axios.get(`https://finmap.onrender.com/api/v1/getNews/${newsId}`,{
        
            // params: { id: newsId }
          
        });
        if (response.data.success) {
          setNews(response.data.data);
        }
        console.log('console response:', response.data.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    }
    fetchNews();
  }, [newsId]);

   const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <button className="mb-4 mt-8 text-blue-500" onClick={() => navigate(-1)}>Back</button>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">{news.newsName}</h2>
          <img src={`https://finmap.onrender.com/newsImage/${news.newsImage}`} alt={news.newsName} className="w-full h-64 object-cover mb-4" />
          <div className="flex items-center mb-4">
            <img src={`https://finmap.onrender.com/editorImages/${news.editorImage}`} alt="Editor" className="w-8 h-8 rounded-full mr-2" />
            <div>
              <span className="text-gray-700">{news.editorName}</span>
              <span className="text-gray-500 ml-2">{formatDate(news.createdAt)}</span>
            </div>
          </div>
          <p className="text-gray-900">{news.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
