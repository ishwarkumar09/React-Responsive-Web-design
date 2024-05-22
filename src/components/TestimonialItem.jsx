import React from 'react';

const TestimonialItem = ({ message, description, name, position }) => {
  return (
    <div data-aos="fade-flip" className="item aos-init aos-animate w-[450px] mx-auto">
      <div className="bg-[#EDF8F5] px-10 py-5 rounded-lg">
        <p className="text-xl font-bold poppins-regular">{message}</p>
        <p className="mt-2 poppins-regular">{description}</p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fontSize: '64px' }}
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
        </svg>
        <p className="font-bold text-xl uppercase poppins-regular">{name}</p>
        <p className="text-sm poppins-regular">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;

