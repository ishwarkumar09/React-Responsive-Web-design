import React from 'react';
import PartnerItem from '../../components/PartnerItem';

function Partners() {
    
      return (
        <div data-aos="fade-right" className="aos-init aos-animate">
          <div data-aos="" className="container mx-auto mt-10 aos-init aos-animate">
            <h1 className="saira text-center uppercase font-medium md:text-4xl text-3xl lg:px-96">
              <span className="text-[#3EA089]">100+</span> More than trusted partners
            </h1>
            <div className="mt-5 flex justify-center">
              <img
                alt=""
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                style={{ color: 'transparent' }}
                src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/zikzak.5d10cec4.svg"
              />
            </div>
          </div>
         <PartnerItem />
        </div>
      );
    
}

export default Partners