import React from 'react'

function MapSection() {
    return (
        <div className="container mx-auto px-10 mt-12" data-aos="fade-up">
          <div className="bg-[#EDF8F5] flex lg:flex-row flex-col justify-center lg:gap-2 gap-5 px-10 py-5 rounded-lg">
            <div>
              <div className="bg-[#91D4C4] rounded-full p-3 w-24 flex justify-center items-center">
                <img
                  alt=""
                  loading="lazy"
                  width="68"
                  height="68"
                  decoding="async"
                  className="animate-rotate-y animate-infinite"
                  style={{ color: 'transparent' }}
                  src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/ruppes.98c83827.svg"
                />
              </div>
              <div className="mt-10">
                <h1 className="saira uppercase md:w-[340px] font-medium md:text-4xl text-3xl">
                  Work with us from anywhere in <span className="text-[#3EA089]">India</span>
                </h1>
                <img
                  alt=""
                  loading="lazy"
                  width="200"
                  height="200"
                  decoding="async"
                  className="mt-4"
                  style={{ color: 'transparent' }}
                  src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/zikzak.5d10cec4.svg"
                />
                <p className="poppins-regular mt-4">
                  TAPI Cashless is committed to appreciating and respecting the choice and privacy of its user base and the business associates when they use our website and services. The statement here highlights and gives information about the privacy practices employed and used by us in relation to the personal information we hold of our business associates and users.
                </p>
              </div>
            </div>
            <div>
              <img
                alt=""
                loading="lazy"
                width="3000"
                height="3000"
                decoding="async"
                style={{ color: 'transparent' }}
                src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/map1.cff5fa57.svg"
              />
            </div>
          </div>
        </div>
      );
}

export default MapSection