import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { CourseCard } from './Courses/Courses';

const ReviewSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://finmap.onrender.com/api/v1/getAllReview");
        console.log('response data:', response.data);
        if (response.data.success === true) {
          setReviewData(response.data.data); // Update state with the fetched data
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
    slidesToShow: 4,
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

  // Function to generate star icons based on rating
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

  // Function to truncate review text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const courseList = [
    {
      id: "schooling",
      image: 'https://images.pexels.com/photos/4643352/pexels-photo-4643352.jpeg',
      title: "Schooling",
      description: "Foundation subjects for classes 1–12 with notes, examples, and practice.",
      tags: ["Maths", "Science", "Languages"],
      primaryCtaHref: "/resources#notes",
      primaryCtaLabel: "Start Learning",
      secondaryCtaHref: "/resources#quizzes",
      secondaryCtaLabel: "Practice",
    },
    {
      id: "vocational",
      image: 'https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg',
      title: "Vocational",
      description: "Job-ready skills: farming, tailoring, repair, crafts, and entrepreneurship.",
      tags: ["Skills", "Livelihood", "Hands-on"],
      primaryCtaHref: "/resources#videos",
      primaryCtaLabel: "Start Learning",
      secondaryCtaHref: "/resources#ebooks",
      secondaryCtaLabel: "Download",
    },
    {
      id: "digital",
      image: 'https://images.pexels.com/photos/7648507/pexels-photo-7648507.jpeg',
      title: "Digital Literacy",
      description: "Smartphone basics, internet safety, communication, and essential tools.",
      tags: ["Online Safety", "Basics", "Communication"],
      primaryCtaHref: "/resources#videos",
      primaryCtaLabel: "Watch Lessons",
      secondaryCtaHref: "/resources#quizzes",
      secondaryCtaLabel: "Try Quiz",
    },
    {
      id: "exams",
      image: 'https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg',
      title: "Exam Prep",
      description: "Strategy, mock tests, and study notes for boards and competitive exams.",
      tags: ["Mock Tests", "Notes", "Tips"],
      primaryCtaHref: "/resources#quizzes",
      primaryCtaLabel: "Start Practice",
      secondaryCtaHref: "/resources#notes",
      secondaryCtaLabel: "Study Notes",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Featured Courses</h2>
        <Slider ref={sliderRef} {...settings}>
          {/* {courseList.map((review, index) => ( */}
              {courseList.map((course,index) => (
            <div key={index} className={` px-3 pb-4  ${index === currentIndex ? 'opacity-100' : 'opacity-100'}`}>
              <div className="bg-white rounded-lg shadow-md p-3  relative min-h-60">
                <CourseCard key={course.id} {...course} />
              </div>
            </div>
              ))}
          {/* ))} */}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlider;
