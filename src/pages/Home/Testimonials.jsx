import React, { useState } from 'react';
import TestimonialItem from '../../components/TestimonialItem';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      message: "Services is good",
      description: "Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum porttitor egestas semper. Neque donec euismod elit massa nisl scelerisque eu congue sem. Porttitor at pharetra.",
      name: "Mathieu Diab",
      position: "Globalshyp, Founder"
    },
    {
      id: 1,
      message: "Services is good",
      description: "Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum porttitor egestas semper. Neque donec euismod elit massa nisl scelerisque eu congue sem. Porttitor at pharetra.",
      name: "Mathieu Diab",
      position: "Globalshyp, Founder"
    },
    {
      id: 1,
      message: "Services is good",
      description: "Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum porttitor egestas semper. Neque donec euismod elit massa nisl scelerisque eu congue sem. Porttitor at pharetra.",
      name: "Mathieu Diab",
      position: "Globalshyp, Founder"
    },
    {
      id: 1,
      message: "Services is good",
      description: "Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum porttitor egestas semper. Neque donec euismod elit massa nisl scelerisque eu congue sem. Porttitor at pharetra.",
      name: "Mathieu Diab",
      position: "Globalshyp, Founder"
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-10 mt-10">
      <div className="flex items-center justify-center">
        <button className="text-[#3EA089] animate-fade animate-infinite animate-duration-[1000ms] animate-delay-1000 uppercase saira bg-[#EDF8F5] rounded-lg px-4 py-2 text-nowrap hover:-translate-y-1 transform transition-all duration-500 hover:shadow-md">
          Testimonials
        </button>
      </div>
      <h1 className="saira text-center uppercase font-medium md:text-4xl text-3xl lg:px-96 mt-2">
        Love from <span className="text-[#3EA089]">clients</span>
      </h1>
      <div className="mt-5 flex justify-center">
        <img alt="" width="200" height="200" src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/zikzak.5d10cec4.svg" />
      </div>
      <div className="relative mt-10 mb-10 min-w-full">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex justify-center  carousel-item ${index === currentIndex ? 'active' : 'hidden'}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: 'transform 0.5s ease',
              }}
            >
                <div className='flex gap-2 mx-2 overflow-hidden '> 
              <TestimonialItem
                message={testimonial.message}
                description={testimonial.description}
                name={testimonial.name}
                position={testimonial.position}
              />
              <TestimonialItem
                message={testimonial.message}
                description={testimonial.description}
                name={testimonial.name}
                position={testimonial.position}
              />
              <TestimonialItem
                message={testimonial.message}
                description={testimonial.description}
                name={testimonial.name}
                position={testimonial.position}
              />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          ›
        </button>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
