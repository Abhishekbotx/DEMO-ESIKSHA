import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LatestTrends = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsdata, setNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://finmap.onrender.com/api/v1/getAllNews");
        console.log('response data:', response.data);
        if (response.data.success === true) {
          setNewsData(response.data.data); // Update state with the fetched data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    afterChange: (current) => setCurrentIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Stay updated with the latest trends</h2>

        <Slider ref={sliderRef} {...settings}>
          {newsdata.map((news, index) => (
            <div key={news._id} className="px-3">
              <div className="bg-white rounded-lg shadow-md pb-4  relative min-h-[350px] flex flex-col justify-between">
                <img
                  src={`https://finmap.onrender.com/newsImage/${news.newsImage}`}
                  alt="News Image"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4 flex justify-between px-4">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => navigate(`/news/${news._id}`)}
                  >
                    Read more
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{truncateText(news.newsName, 60)}</h3>
                  <div className="flex items-center mt-auto">
                    <img
                      src={`https://finmap.onrender.com/editorImages/${news.editorImage}`}
                      alt="Profile"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-gray-700 text-sm md:text-base">{news.editorName}</span>
                    <span className="text-gray-500 ml-2 text-sm">{formatDate(news.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestTrends;
