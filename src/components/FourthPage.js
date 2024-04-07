import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FourthPage = () => {
  const progress = 55;

  const options = [
    { id: 1, icon: faCheckCircle, boldText: 'Student', normalText: 'or soon to be enrolled' },
    { id: 2, icon: faCheckCircle, boldText: 'Professional', normalText: 'pursuing a career' },
    { id: 3, icon: faCheckCircle, boldText: 'Parent', normalText: 'of a school-age child' },
    { id: 4, icon: faCheckCircle, boldText: 'Lifelong learner', normalText: '' },
    { id: 5, icon: faCheckCircle, boldText: 'Teacher', normalText: '' },
    { id: 6, icon: faCheckCircle, boldText: 'Other', normalText: '' }
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    console.log(optionId);
  };

  const handlePrev = ()=>{
    navigate('/third');
  }

  const handleNext = ()=>{
    navigate('/fifth');
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="navbarn absolute top-0 left-0 w-full flex 
      justify-between items-center my-8">
        <button className="ml-8 mr-3 mt-1" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
        </button>

        <div className="bg-gray-200 h-1 flex-grow mr-8">
          <div className="bg-green-500 h-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>


      {/* For page options */}
      <div className="h-screen flex flex-col justify-center items-center mx-4 mt-2">
        <h1 className="text-center font-bold text-3xl sm:text-xl">
          Which describes you best?
        </h1>
        <span className="text-center text-gray-500 mt-4 mx-10 sm:mx-2">
          This will help us to personalize your experience
        </span>
        <div className="max-w-lg w-full flex flex-col gap-4 mt-8">
          {options.map(option => (
            <div
            key={option.id}
            className={`p-4 border rounded-md cursor-pointer transition 
            duration-300 ${selectedOption === option.id ? 'bg-green-100' : 'hover:bg-gray-200'}`}
            onClick={() => handleOptionSelect(option.id)}
          >
              <div className="flex items-center">
                <FontAwesomeIcon icon={option.icon} className="mr-2 text-green-500" />
                <span>
                  <strong>{option.boldText} </strong><span className='text-gray-500'>{option.normalText}</span>
                </span>
              </div>
            </div>
          ))}
          <button 
          onClick={handleNext}
        className={`px-4 py-2 rounded-md mt-4 mx-24 ${selectedOption ? 'bg-black text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      >
        Continue
      </button>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
