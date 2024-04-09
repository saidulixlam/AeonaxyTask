import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FifthPage = () => {
  const progress = 80;

  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/fourth');
  };

  const handleNext = () => {
    navigate('/six');
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

      <div className="flex flex-row items-center w-full mx-4 mt-28 gap-4">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 flex flex-col items-center mr-2 mt-20">
          <img src="https://png.pngtree.com/png-clipart/20240115/original/pngtree-cheering-and-joy-illustration-characters-free-of-charge-png-image_14117330.png" alt="dummy" className="w-60 h-50 rounded-full mb-4" />
        </div>
        
        {/* Right side with text */}
        <div className="w-full md:w-1/2 flex flex-col ml-2 mt-16 mr-6">
          <h1 className="text-2xl font-bold mb-4 text-start">You're on your way!</h1>
          <p className="text-gray-600">
          "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand.Now feel confident approaching both technical job interviews and real world problem solving situations."
          </p>
          <p className="mt-4">- Jacob 5</p>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center mx-4 mt-2">
        <button
          onClick={handleNext}
          className={'px-4 py-2 rounded-md mt-4 mx-24 bg-black text-white'}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default FifthPage;
