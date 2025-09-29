import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const ReviewSlider = () => {
  const [reviewData, setReviewData] = useState([]);
  const [editModes, setEditModes] = useState([]);
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://finmap.onrender.com/api/v1/getAllReview", {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
        if (response.data.success === true) {
          setReviewData(response.data.data);
          setTempData(response.data.data);
          setEditModes(new Array(response.data.data.length).fill(false));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSaveButton = async (index) => {
    try {
      const reviewToUpdate = tempData[index];
      const response = await axios.put(
        `https://finmap.onrender.com/api/v1/Admin/updateReview`,
        {
          reviewId: reviewToUpdate._id,
          fullName: reviewToUpdate.name,
          profession: reviewToUpdate.profession,
          review: reviewToUpdate.review,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );

      if (response.data.success === true) {
        toast.success('Review updated successfully');
        setReviewData(prevData => {
          const updatedData = [...prevData];
          updatedData[index] = reviewToUpdate;
          return updatedData;
        });
      } else {
        toast.error("Review was not updated");
      }
    } catch (error) {
      if (error.response) {
        toast.error('Review was not updated due to server error.');
      } else if (error.request) {
        toast.error('No response received. Please check your internet connection.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
      console.error("Error updating review:", error);
    }

    toggleEditMode(index);
  };

  const handleDeleteButton = async (index) => {
    const reviewToDelete = reviewData[index];
    try {
      const response = await axios.post(
        `https://finmap.onrender.com/api/v1/Admin/deleteReview`,{
            reviewId: reviewToDelete._id,
          
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );

      if (response.data.success === true) {
        toast.success('Review deleted successfully');
        setReviewData(prevData => prevData.filter((_, i) => i !== index));
        setTempData(prevData => prevData.filter((_, i) => i !== index));
        setEditModes(prevModes => prevModes.filter((_, i) => i !== index));
      } else {
        toast.error("Review was not deleted");
      }
    } catch (error) {
      if (error.response) {
        toast.error('Review was not deleted due to server error.');
      } else if (error.request) {
        toast.error('No response received. Please check your internet connection.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
      console.error("Error deleting review:", error);
    }
  };

  const handleEditClick = (index) => {
    toggleEditMode(index);
  };

  const toggleEditMode = (index) => {
    setEditModes(prevModes => prevModes.map((mode, i) => i === index ? !mode : mode));
  };

  const handleInputChange = (index, field, value) => {
    const updatedTempData = [...tempData];
    updatedTempData[index][field] = value;
    setTempData(updatedTempData);
  };

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
    }
    for (let i = Math.floor(rating); i < 5; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col justify-between mb-4 px-2 py-2">
        <div className="flex justify-between mx-8 mb-8">
          <h2 className="text-3xl font-bold">Reviews</h2>
          <Link
            to="/privatezxl-create-review"
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
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Create Review
          </Link>
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
          {reviewData.map((review, index) => (
            <div key={index} className="w-64 relative">
              <div className="bg-white rounded-lg shadow-md p-6" style={{ height: editModes[index] ? 'auto' : '320px' }}>
                <div className="flex items-center mb-2">
                  <img src={`https://finmap.onrender.com/reviewImage/${review.image}`} alt={review.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    {editModes[index] ? (
                      <>
                        <input
                          type="text"
                          value={tempData[index].name}
                          className='w-32'
                          onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                        />
                        <input
                          type="text"
                          value={tempData[index].profession}
                          className='w-32'
                          onChange={(e) => handleInputChange(index, 'profession', e.target.value)}
                        />
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg text-green-400 font-bold">{review.name}</h3>
                        <p className="text-gray-400">{review.profession}</p>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-gray-900 mb-8 max-h-40 text-ellipsis overflow-y-hidden">
                  {editModes[index] ? (
                    <textarea
                      className='h-40 w-52'
                      value={tempData[index].review}
                      onChange={(e) => handleInputChange(index, 'review', e.target.value)}
                    />
                  ) : review.review}
                </p>
                <div className="flex items-center justify-between absolute bottom-4 left-4 right-4">
                  <div className="flex items-center">
                    <button onClick={() => handleDeleteButton(index)} className="text-red-500 ml-2">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>

                  <div className="flex items-center justify-center flex-grow">
                    {generateStars(review.rating)}
                    <span className="ml-2 text-gray-600 pr-8">{review.rating}/5</span>
                  </div>

                  <div className="flex items-center">
                    <button onClick={() => handleEditClick(index)} className="text-gray-500 mr-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    {editModes[index] && (
                      <button onClick={() => handleSaveButton(index)} className="text-gray-500 mr-2">
                        <FontAwesomeIcon icon={faSave} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider; 