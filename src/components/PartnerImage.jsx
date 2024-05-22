import React from 'react';

const PartnerImage = ({ imageSrc, altText }) => {
  return (
    <div data-aos="fade-flip" className="item aos-init aos-animate w-[500px] mx-auto">
      <div className="bg-[#EDF8F5] px-10 py-5 rounded-lg flex justify-center items-center mx-2">
        <img className='w-full'
          alt={altText}
          loading="lazy"
          width="150"
          height="100"
          decoding="async"
          src={imageSrc}
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
  );
};

export default PartnerImage;



