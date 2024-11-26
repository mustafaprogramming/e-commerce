'use client'
import { useState } from 'react';
import {reviews} from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className='px-8 py-6 rounded-md shadow-md hover:shadow-lg md:text-start text-center transition-all duration-300 ease-linear '>
      <div className='md:grid grid-cols-[35%_65%]'>
        <div className='relative w-[150px] h-[150px] rounded-[50%] mx-auto mb-6 img-container'>
          <img src={image} alt={name} className='w-full h-full block object-cover rounded-[50%] relative ' />
          <span className='absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-[50%] translate-y-[25%] bg-black text-white'>
            <FaQuoteRight />
          </span>
        </div>
        <div>
          <h4 className='mb-1 font-semibold text-base capitalize'>{name}</h4>
          <p className='mb-4 uppercase text-sm'>{job}</p>
          <p className='mb-3 font-thin text-[12px]'>{text}</p>
        </div>
      </div>
      <div className='my-2 flex justify-center'>
        <button className='text-black/50 hover:text-black text-lg bg-transparent border-transparent mx-4 transition-all duration-300 ease-linear' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='text-black/50 hover:text-black text-lg bg-transparent border-transparent mx-4 transition-all duration-300 ease-linear' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
