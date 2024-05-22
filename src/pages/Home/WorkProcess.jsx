import React from 'react'

function WorkProcess() {
    return (
        <div>
        <div className="lg:mt-[400px] md:mt-[500px] mt-[100px] container mx-auto px-5">
          <div data-aos="zoom-in">
            <div className="flex items-center justify-center">
              <button className="text-[#3EA089] uppercase animate-fade animate-infinite animate-duration-[1000ms] animate-delay-1000 saira bg-[#EDF8F5] rounded-lg px-4 py-2 text-nowrap">work process</button>
            </div>
            <h1 className="saira text-center uppercase font-medium md:text-4xl text-3xl lg:px-96 mt-2">How its<span className="text-[#3EA089]"> work</span></h1>
            <div className="mt-2 flex justify-center">
              <img alt="" loading="lazy" width="200" height="200" decoding="async" style={{ color: 'transparent' }} src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/zikzak.5d10cec4.svg" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-20 gap-5 mt-5">
          <div data-aos="flip-left" className="aos-init aos-animate">
        <div className="flex justify-center items-center">
          <div className="bg-[#065363] rounded-full p-5 w-20 flex justify-center items-center">
            <img
              alt=""
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              className="animate-rotate-y animate-infinite"
              style={{ color: 'transparent' }}
              src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/creteac.f91b5141.svg"
            />
          </div>
        </div>
        <div className="mt-2">
          <p className="text-[#032930] text-xl text-center poppins-regular font-bold">Step 01: <br /> Create Account</p>
          <p className="text-justify poppins-regular mt-2">Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum porttitor egestas semper. Neque donec euismod elit massa nisl scelerisque eu congue sem. Porttitor at pharetra.</p>
        </div>
      </div>
          <div data-aos="flip-left" className="aos-init aos-animate">
        <div className="flex justify-center items-center">
          <div className="bg-[#065363] rounded-full p-5 w-20 flex justify-center items-center">
            <img
              alt=""
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              className="animate-rotate-y animate-infinite"
              style={{ color: 'transparent' }}
              src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/verif.e972de6e.svg"
            />
          </div>
        </div>
        <div className="mt-2">
          <p className="text-[#032930] text-xl text-center poppins-regular font-bold">Step 02: <br /> Detail Verification</p>
          <p className="text-justify poppins-regular mt-2">Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum porttitor egestas semper. Neque donec euismod elit massa nisl scelerisque eu congue sem. Porttitor at pharetra.</p>
        </div>
      </div>
          <div data-aos="flip-left" className="aos-init aos-animate">
        <div className="flex justify-center items-center">
          <div className="bg-[#065363] rounded-full p-5 w-20 flex justify-center items-center">
            <img
              alt=""
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              className="animate-rotate-y animate-infinite"
              style={{ color: 'transparent' }}
              src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/getway.67554768.svg"
            />
          </div>
        </div>
        <div className="mt-2">
          <p className="text-[#032930] text-xl text-center poppins-regular font-bold">Step 03: <br /> Get Payment Gateways</p>
          <p className="text-justify poppins-regular mt-2">Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum porttitor egestas semper. Neque donec euismod elit massa nisl scelerisque eu congue sem. Porttitor at pharetra.</p>
        </div>
      </div>
          </div>
        </div>
        <div data-aos="fade-up" className="container mx-auto px-5 mt-10 aos-init aos-animate">
      <div className="relative flex justify-center items-center">
        <img
          alt=""
          loading="lazy"
          width="1264"
          height="525"
          decoding="async"
          data-nimg="1"
          style={{ color: 'transparent' }}
          src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/workdownimg.375a5e34.svg"
        />
        <div className="absolute">
          <img
            alt=""
            loading="lazy"
            width="123"
            height="123"
            decoding="async"
            data-nimg="1"
            className="animate-pulse"
            style={{ color: 'transparent' }}
            src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/youtubeicon.31886f81.svg"
          />
        </div>
      </div>
    </div>
        </div>
      );
}

export default WorkProcess