import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SixthPage = () => {
  const progress = 100;

  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const dummyCourseData = {
        title: 'Course Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
        image1: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th-760x475.jpg',
        image2: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th-760x475.jpg'
      };
      setCourseData(dummyCourseData);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    navigate('/fifth');
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="navbar absolute top-0 left-0 w-full flex justify-between items-center my-8">
        <button className="ml-8 mr-3 mt-1" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
        </button>
        <div className="bg-gray-200 h-1 flex-grow mr-8">
          <div className="bg-green-500 h-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-yellow-500 h-16 w-16 mb-4"></div>
          <p className="text-gray-500 text-md mt-3 text-center">Loading..</p>
          <span className="text-center text-gray-700 mt-4 mx-10 sm:mx-2">
            Finding learning path recommendation for you based on your responses
          </span>
        </div>
      ) : (
        <div className="text-center mx-10 ">
          <h4 className="text-3xl font-bold mx-4 mt-10">Learning paths based on your answers</h4>
          <p className="text-gray-600 mb-6 mx-6">Choose one to get started. You can switch anytime</p>
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center bg-white rounded-md p-4 my-4 shadow-lg">
              <img src={courseData.image1} alt="Card 1" className="w-30 h-24 rounded-md mr-4 sm:mr-0 sm:mb-4" />
              <div className="w-full text-start mx-4 sm:w-60">
                <p className="font-semibold">Foundation Math</p>
                <p className="text-gray-600">Build your foundational skills in algebra, geometry, and probability.</p>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-md p-4 shadow-lg">
              <img src={courseData.image2} alt="Card 2" className="w-30 h-24 rounded-md mr-4 sm:mr-0 sm:mb-4" />
              <div className="w-full text-start mx-4 sm:w-60">
                <p className="font-semibold">Foundation Math</p>
                <p className="text-gray-600">Build your foundational skills in algebra, geometry, and probability.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SixthPage;
