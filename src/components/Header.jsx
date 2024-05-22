import React, { useState } from "react";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-[#DAF1EB] py-4 px-4 w-full sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="https://tapifinal1-git-master-shrikunjs-projects.vercel.app/_next/static/media/logo1.e0329831.svg"
              alt="Logo"
            />
          </div>
          <div className="lg:block hidden">
            <ul className="flex items-center gap-7">
              <a href="/">
                <li className="hover:text-[#3EA089] poppins-regular ">HOME</li>
              </a>
              <a href="/">
                <li className="hover:text-[#3EA089] poppins-regular ">ABOUT US</li>
              </a>
              <a href="/">
                <li className="hover:text-[#3EA089] poppins-regular ">SERVICES</li>
              </a>
              <a href="/">
                <li className="hover:text-[#3EA089] poppins-regular ">CONTACT US</li>
              </a>
              <li>
                <button className="bg-[#3EA089] rounded-md px-3 py-2 text-white poppins-regular hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.2)] transition-all duration-500">
                  GET STARTED
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:hidden block">
            <button onClick={toggleSidebar} className="text-black">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#DAF1EB] z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center gap-7 mt-10 z-50">
          <a href="/" onClick={toggleSidebar}>
            <li className="hover:text-[#3EA089] poppins-regular ">HOME</li>
          </a>
          <a href="/" onClick={toggleSidebar}>
            <li className="hover:text-[#3EA089] poppins-regular ">ABOUT US</li>
          </a>
          <a href="/" onClick={toggleSidebar}>
            <li className="hover:text-[#3EA089] poppins-regular ">SERVICES</li>
          </a>
          <a href="/" onClick={toggleSidebar}>
            <li className="hover:text-[#3EA089] poppins-regular ">CONTACT US</li>
          </a>
          <li>
            <button
              className="bg-[#3EA089] rounded-md px-3 py-2 text-white poppins-regular hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.2)] transition-all duration-500"
              onClick={toggleSidebar}
            >
              GET STARTED
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
