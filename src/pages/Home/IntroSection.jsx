import React from 'react';

function IntroSection() {
  return (
    <div>
      <div className="bg-[#065363] mainyourimg py-10">
        <div className="container mx-auto px-10">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:gap-0 gap-14">
            <div className="text-white lg:w-[50%]">
              <h1 className="poppins-regular uppercase font-extrabold md:text-4xl text-2xl md:w-[400px] leading-normal">
                Your Trusted Payment
              </h1>
              <div className="mt-5 relative">
                <h1 className="uppercase font-extrabold text-5xl poppins-regular z-20">Solution</h1>
                <div className="bg-[#3EA089] absolute py-10 px-[230px] z-10 -bottom-4 -left-40 opacity-50 rounded-e-lg"></div>
              </div>
              <p className="mt-10 md:mr-28 poppins-regular">
                Lorem ipsum dolor sit amet consectetur. Velit nulla nam hac cras sed senectus malesuada. Ut egestas sodales molestie id est. In vel lacus vestibulum nulla in egestas eget. Egestas quis massa.
              </p>
              <div className="container mx-auto flex md:flex-row flex-col gap-5 mt-10">
                <button className="px-3 py-3 border border-slate-300 text-white hover:bg-[#3EA089] rounded-lg poppins-regular hover:border-teal-500 transition-all duration-500">
                  GET STARTED
                </button>
                <button className="px-3 py-3 border border-slate-300 hover:bg-[#3EA089] rounded-lg uppercase poppins-regular hover:border-teal-500 transition-all duration-500">
                  More information
                </button>
              </div>
            </div>
            <div>
              <img
                alt=""
                loading="lazy"
                width="565"
                height="535"
                decoding="async"
                data-nimg="1"
                className="yourtrustimag2 relative z-30"
                src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/yourtrustmain2.7bf58260.svg"
                style={{ color: "transparent" }}
              />
              <img
                alt=""
                loading="lazy"
                width="774"
                height="164"
                decoding="async"
                data-nimg="1"
                className="absolute yourtrustimag3 right-0 overflow-x-hidden md:-bottom-12 -bottom-80"
                src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/yourtrustmain3.5e3b4bfd.svg"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default IntroSection;
