import React from 'react';


const Footer = () => {

  return (
    <div className="mt-5">
      <div className="bg-cover py-10" style={{ backgroundImage: "url('../../public/images/footer1.webp')" }}>
        <div data-aos="fade-right" className="container mx-auto px-10 aos-init aos-animate">
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between lg:items-end">
            <div>
              <div className="bg-[#91D4C4] animate-rotate-y animate-infinite rounded-full flex w-20 justify-center items-center p-6">
                <img alt="" loading="lazy" width="32" height="32" decoding="async" src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/massegeicon.c54457cd.svg" style={{ color: 'transparent' }} />
              </div>
              <div>
                <p className="text-white text-3xl font-medium saira uppercase mt-5 lg:pr-[400px]">Keep up with the latest</p>
                <img alt="" loading="lazy" width="200" height="200" decoding="async" className="mt-5" src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/zikzak.5d10cec4.svg" style={{ color: 'transparent' }} />
                <p className="text-white text-sm mt-5 poppins-regular">Join our newsletter to stay up-to-date on the latest features and releases.</p>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-sm poppins-regular">Get up to date</p>
              <div className="flex md:flex-row flex-col gap-2 mt-2">
                <input type="text" placeholder="Get Started" className="placeholder:text-white lg:w-[350px] text-white border-2 border-gray-300 bg-transparent outline-none rounded-lg px-2 py-2" />
                <button className="text-white bg-[#3EA089] px-4 py-2 rounded-lg poppins-regular transition-all duration-500 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">SUBMIT</button>
              </div>
              <p className="text-white text-sm mt-2 poppins-regular">By subscribing, you agree to our <span className="text-[#3EA089] poppins-regular">Privacy Policy.</span></p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="py-10 aos-init aos-animate">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:justify-items-center">
            <div>
              <img alt="" loading="lazy" width="174" height="52" decoding="async" src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/logo1.e0329831.svg" style={{ color: 'transparent' }} />
              <p className="mt-5 text-sm poppins-regular">Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum porttitor egestas semper. Neque donec euismod elit massa nisl scelerisque eu congue sem. Porttitor at pharetra.</p>
              <p className="mt-5 poppins-regular">Copyright © 2024 TCPL, All Rights Reserved.</p>
            </div>
            <ul>
              <li className="lg:mt-0 mt-5"><a className="text-[#3EA089] mb-5 text-xl font-medium poppins-regular" href="">Useful links</a></li>
              <li className="mt-10"><a className="hover:text-[#3EA089] poppins-regular" href="">Home</a></li>
              <li className="mt-3"><a className="hover:text-[#3EA089] poppins-regular" href="">About Us</a></li>
              <li className="mt-3"><a className="hover:text-[#3EA089] poppins-regular" href="">Service</a></li>
              <li className="mt-3"><a className="hover:text-[#3EA089] poppins-regular" href="">Contact us</a></li>
            </ul>
            <ul>
              <li className="lg:mt-0 mt-5"><a className="text-[#3EA089] mb-5 text-xl font-medium poppins-regular" href="">Support</a></li>
              <li className="mt-10"><a className="hover:text-[#3EA089] poppins-regular" href="">FAQs</a></li>
              <li className="mt-3"><a className="hover:text-[#3EA089] poppins-regular" href="">Raise a Ticket</a></li>
              <li className="mt-3"><a className="hover:text-[#3EA089] poppins-regular" href="">Privacy Policy</a></li>
              <li className="mt-3"><a className="hover:text-[#3EA089] poppins-regular" href="">Terms &amp; Conditions</a></li>
            </ul>
            <div className="lg:mt-0 mt-5">
              <p className="text-[#3EA089] mb-5 text-xl font-medium poppins-regular">Contact us</p>
              <p className="mt-5 text-sm poppins-regular">G/87, HAPPY GOLDMINES SHOPPERS, B/S BELADIMORA, <br /> VESU, SURAT - 305007</p>
              <p className="mt-5 text-sm poppins-regular">Call us : (+91) 721 116 7666 <br /> Email Us : support@tapipe.com</p>
              <div className="flex gap-3 mt-3">
                <img alt="" loading="lazy" width="27" height="27" decoding="async" src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/facebook.f413068e.svg" style={{ color: 'transparent' }} />
                <img alt="" loading="lazy" width="28" height="27" decoding="async" src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/linkedin.a986079a.svg" style={{ color: 'transparent' }} />
                <img alt="" loading="lazy" width="28" height="27" decoding="async" src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/linkedin.a986079a.svg" style={{ color: 'transparent' }} />
                <img alt="" loading="lazy" width="27" height="27" decoding="async" src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/WhatsApp.42c24390.svg" style={{ color: 'transparent' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
