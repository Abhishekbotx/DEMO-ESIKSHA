import React from 'react';
import articleImage from '../../img/image.png'; 
import articles from './data.json'
const EmploymentCreditScores = () => {
  return (
    <div className="font-sans p-6 border  rounded-lg mx-4 my-4 mt-12" >
        <img src={articleImage} alt="About Us" className="mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4 ">
        Building blocks of employment: Why Credit Scores matter to employers
      </h1>
      <p className="text-sm text-gray-600 mb-4">02 May, 2024</p>
      <p className="text-lg text-gray-700 mb-6">
        In today’s competitive job market, employers are increasingly turning their attention to factors beyond traditional
        qualifications and experience. One such crucial aspect is an individual’s credit score, which serves as a key
        indicator of financial responsibility and stability. Understanding the significance of credit scores in the
        employment landscape requires delving into two primary subtopics: 
        <a href="#risk-assessment" className="text-lime-400  mx-1  decoration-0">Risk Assessment</a> and 
        <a href="#company-image-trust" className="text-orange-500  mx-1">Company Image and Trust</a>.
      </p>
      
      <h2 id="risk-assessment" className="text-2xl font-semibold  text-lime-500 text-center mb-4">
        Risk Assessment
      </h2>
      <p className="text-gray-700 mb-6">
        Employers often view an applicant’s credit score as a reflection of their reliability and trustworthiness. A strong credit
        history suggests responsible financial behavior, including timely bill payments and prudent management of debt. This level
        of financial discipline translates into traits valued in the workplace, such as reliability, attention to detail, and the
        ability to handle pressure. Conversely, a low credit score may raise concerns about an individual’s ability to manage their
        own affairs, potentially signaling a higher risk for irresponsible behavior in the workplace, such as theft or fraud.
      </p>
      
      <h2 id="company-image-trust" className="text-2xl font-semibold text-orange-400 text-center mb-4">
        Company Image and Trust
      </h2>
      <p className="text-gray-700 mb-6 text-center">
        Beyond individual assessments, a workforce comprised of financially responsible individuals contributes to a positive
        company image. Employees with healthy credit profiles are seen as more stable and less likely to engage in activities
        that could tarnish the organization’s reputation. This perception not only enhances trust among clients and stakeholders
        but also fosters a culture of integrity within the company. Additionally, when employees demonstrate sound financial
        habits, it can positively influence workplace dynamics, fostering a sense of security and collaboration among colleagues.
      </p>
      
      <p className="text-gray-700  mb-6 text-center">
        In conclusion, credit scores have emerged as integral components of the employment equation, influencing hiring decisions
        and shaping organizational culture. Employers recognize the value of financially responsible employees in mitigating risk
        and upholding company reputation, making credit scores a vital consideration in the hiring process. As individuals navigate
        their careers, maintaining a strong credit profile becomes not only a personal finance goal but also a strategic investment
        in future employment opportunities.
      </p>
      
      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
      <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Weekly Digest</h2>
      {articles.map((article, index) => (
        <div key={index} className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="flex-none w-full h-36 mb-4 md:mb-0 md:w-36 md:mr-4">
              <img className="object-cover h-full w-full rounded-lg" src={article.imageUrl} alt="Article" />
            </div>
            <div className="flex flex-col items-start md:items-start md:gap-y-4">
              <p className="text-sm text-gray-500 md:text-left">{article.date}</p>
              <h3 className="text-xl font-semibold text-center md:text-left">{article.title}</h3>
              <p className="text-gray-700 text-center md:text-left ">{article.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default EmploymentCreditScores;
