import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FourthPage = () => {
  const progress = 60;
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/third');
  };

  const handleNext = () => {
    if (selectedImage === null) {
      alert('Please select a math problem before continuing.');
      return;
    }
    navigate('/fifth');
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const images = [
    { src: 'https://www.geneo.in/blog/wp-content/uploads/2022/05/The-Basics-Of-Algebra-in-Class-7-Maths.jpg', alt: 'Math problem 1' },
    { src: 'https://www.geneo.in/blog/wp-content/uploads/2022/05/The-Basics-Of-Algebra-in-Class-7-Maths.jpg', alt: 'Math problem 2' },
    { src: 'https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2017/08/11115348/Probability.png', alt: 'Math problem 3' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4uuOqVJWpXlCrXXb_iW2jDZiymJ8YBbVPFjAKOp_gA&s', alt: 'Math problem 4' }
  ];

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

      <div className="h-screen flex flex-col justify-center items-center mx-4 mt-2">
        <h1 className="text-center font-bold text-3xl sm:text-xl">
          What is your math comfort level?
        </h1>
        <span className="text-center text-gray-500 mt-4 mx-10 sm:mx-2">
          Choose the highest level you feel confident in -- you can adjust later
        </span>
        <div className="flex justify-center flex-wrap mt-8 shadow-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`rounded-md w-32 h-32 mx-4 my-4 cursor-pointer ${
                selectedImage === index ? 'border border-green-500' : ''
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={selectedImage === null}
          className={`px-4 py-2 rounded-md mt-16 mx-24 bg-black text-white ${
            selectedImage === null ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default FourthPage;
