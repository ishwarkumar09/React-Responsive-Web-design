import React, { useState, useEffect } from 'react';
import PartnerImage from './PartnerImage';

const PartnerItem = () => {
    const items = [
        { id: 1, imageSrc: 'https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/iciciimg.04e61dac.svg', altText: 'Image 1' },
        // Ensure each id is unique and there are no duplicates
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [items.length]);
    
      const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      };
    
      const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      };
    
      return (
        <div className="carousel-container relative mt-10 overflow-hidden">
          <div
            className="carousel-inner flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}
          >
            {items.map((item, index) => (
              <div
                
                className="flex justify-center carousel-item  gap-2"
              ><div className='flex justify-center gap-2 min-w-full' key={item.index}>
                <PartnerImage imageSrc={item.imageSrc} altText={item.altText} />
                <PartnerImage imageSrc={item.imageSrc} altText={item.altText} />
                <PartnerImage imageSrc={item.imageSrc} altText={item.altText} />
                <PartnerImage imageSrc={item.imageSrc} altText={item.altText} />
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
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      );
    };
  

export default PartnerItem;



