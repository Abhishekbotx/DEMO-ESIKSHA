import React from 'react';
// Layout provides Navbar and Footer
import schoolingImg from '../../img/CustomerEducation.jpg';
import vocationalImg from '../../img/services.jpg';
import digitalImg from '../../img/image.png';
import examsImg from '../../img/Files.png';

export const CourseCard = ({ id, image, title, description, primaryCtaHref, primaryCtaLabel, secondaryCtaHref, secondaryCtaLabel, tags = [] }) => {
  return (
    <div id={id} className="group bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="aspect-video w-full overflow-hidden bg-gray-50">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((t) => (
              <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{t}</span>
            ))}
          </div>
        )}
        <div className="flex gap-3">
          {primaryCtaHref && (
            <a href={primaryCtaHref} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm">
              {primaryCtaLabel}
            </a>
          )}
          {secondaryCtaHref && (
            <a href={secondaryCtaHref} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm">
              {secondaryCtaLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const Courses = () => {
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
    <div className="pt-24 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <p className="mb-8 text-gray-700">Choose a learning path. All content is free for rural learners.</p>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <a href="#schooling" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Schooling</a>
        <a href="#vocational" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Vocational</a>
        <a href="#digital" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Digital Literacy</a>
        <a href="#exams" className="border rounded-lg p-4 bg-white shadow-sm hover:shadow cursor-pointer">Exam Prep</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courseList.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;


