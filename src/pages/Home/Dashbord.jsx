import React from 'react'

function Dashbord() {
    return (
        <div data-aos="fade-up" className="bg-[#032930] w-full py-10 relative lg:h-[550px] aos-init aos-animate">
          <div className="container mx-auto">
            <div className="lg:px-72 px-5">
              <h1 className="saira md:text-center uppercase font-medium md:text-4xl text-3xl text-white">
                Stay ahead in your business with our user-friendly
                <span className="text-[#3EA089]"> dashboard. </span>
              </h1>
            </div>
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
            <div className="flex md:flex-row flex-col gap-3 justify-center items-center mt-10">
              <button className="bg-[#3EA089] animate-bounce animate-infinite poppins-regular py-3 w-[200px] text-white rounded-lg transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                Get Register now
              </button>
              <button className="py-3 w-[200px] animate-bounce animate-infinite poppins-regular text-white border-gray-200 border-2 rounded-lg transition duration-200 hover:bg-white hover:text-black hover:border-teal-500">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="absolute top-56">
              <img
                alt=""
                loading="lazy"
                width="1013"
                height="704"
                decoding="async"
                style={{ color: 'transparent' }}
                src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/graph1.83e57e80.svg"
              />
            </div>
          </div>
        </div>
      );
    
}

export default Dashbord