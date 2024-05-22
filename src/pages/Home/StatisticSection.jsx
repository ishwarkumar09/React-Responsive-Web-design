import React from 'react';
import CountUp from 'react-countup';

function StatisticsSection() {
  return (
    <div className="container mx-auto lg:px-0 px-10 mt-12" data-aos="fade-right">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
        <div className="flex flex-col items-center" data-aos="fade-up">
          <p className="text-[#065363] font-bold text-3xl poppins-regular">
            <CountUp end={150000} duration={2} separator="," />+
          </p>
          <p className="text-sm poppins-regular"> Transactions Processed</p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
          <p className="text-[#065363] font-bold text-3xl poppins-regular">
            <CountUp end={100} duration={2} suffix=" %" />
          </p>
          <p className="text-sm poppins-regular"> Transaction Success Rate</p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-[#065363] font-bold text-3xl poppins-regular">
            $<CountUp end={500} duration={2} prefix=" " suffix="M+" />
          </p>
          <p className="text-sm poppins-regular"> Total Value of Transactions</p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
          <p className="text-[#065363] font-bold text-3xl poppins-regular">
            <CountUp end={1000} duration={2} separator="," />+
          </p>
          <p className="text-sm poppins-regular"> Satisfied Clients</p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-[#065363] font-bold text-3xl poppins-regular">
            <CountUp end={98} duration={2} suffix="%" />
          </p>
          <p className="text-sm poppins-regular"> Customer Satisfaction Rate</p>
        </div>
      </div>
      <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
        <button className="bg-[#EDF8F5] rounded-lg text-[#3EA089] px-4 py-2 saira hover:-translate-y-1 transform transition-all duration-500 hover:shadow-md">
          Our Services
        </button>
      </div>
      <div className="flex justify-center items-center uppercase font-medium md:text-4xl text-3xl mt-5 lg:px-[350px]" data-aos="fade-up" data-aos-delay="600">
        <h1 className="md:text-center saira">
          Feel the best <span className="text-[#3EA089]"> experience </span> with our features
        </h1>
      </div>
      <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="700">
        <img
          alt=""
          loading="lazy"
          width="200"
          height="200"
          decoding="async"
          src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/zikzak.5d10cec4.svg"
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
}

export default StatisticsSection;

