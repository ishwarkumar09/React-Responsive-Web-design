import React from 'react'

function AboutUs() {
    return (
        <div className="container mx-auto mt-12" data-aos="fade-up">
          <div className="px-10 py-5 rounded-lg">
            <div className="grid lg:grid-cols-2 lg:gap-0 gap-5 grid-cols-1 items-end">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="510"
                  height="539"
                  decoding="async"
                  className="md:ml-10"
                  style={{ color: 'transparent' }}
                  src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/flagthree.8fd3d943.svg"
                />
                <button
                  className="text-white ml-10 bg-[#3EA089] animate-bounce animate-infinite rounded-lg px-4 py-2 text-nowrap mt-10 hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.2)] transition-all duration-500"
                  fdprocessedid="t9l0j"
                >
                  VIEW MORE
                </button>
                <div className="bg-[#EDF8F5] h-[300px] -mt-64 py-5 rounded-l-xl"></div>
              </div>
              <div className="w-full">
                <div className="lg:px-24">
                  <button
                    className="text-[#3EA089] animate-fade animate-infinite animate-duration-[1000ms] animate-delay-1000 mb-5 saira bg-[#EDF8F5] rounded-lg px-4 py-2 text-nowrap hover:-translate-y-1 transform transition-all duration-500 hover:shadow-md"
                    fdprocessedid="r7bwu6"
                  >
                    ABOUT US
                  </button>
                  <p className="saira uppercase font-medium md:text-4xl text-3xl mb-10">
                    We aim to provide expert advice and quality{' '}
                    <span className="text-[#3EA089]">service</span>
                  </p>
                  <img
                    alt=""
                    loading="lazy"
                    width="200"
                    height="200"
                    decoding="async"
                    className="mb-16"
                    style={{ color: 'transparent' }}
                    src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/zikzak.5d10cec4.svg"
                  />
                </div>
                <div className="bg-[#EDF8F5] md:h-[300px] rounded-r-xl py-5">
                  <ul className="list-disc lg:ml-0 md:ml-10 ml-7 md:mr-10 mr-5">
                    <li className="mt-5 poppins-regular text-sm">
                      TAPI Cashless is a young Fintech Organisation incorporated in May - 2024, by the industry veterans with over 19+ years of expertise in Payment industry with a vision to serve the Unbanked and under banked community based on Financial Inclusion programmed and Model run by Reserve Bank Of India(RBI).
                    </li>
                    <li className="mt-5 poppins-regular text-sm">
                      The company aims on providing online platform (Web and Mobile Application) which can help retailers to provide end to end financial services products to the masses through its well massive Cloud infrastructure.
                    </li>
                    <li className="mt-5 poppins-regular text-sm">
                      TAPI Cashless is highly equipped and has full control over our product development roadmap. This also makes us nimble and able to rapidly roll out new features.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default AboutUs