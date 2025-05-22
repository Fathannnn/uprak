// import React from "react";

// const Navbar = () => (
//   <nav className="bg-blue-600 text-white p-4 text-xl font-semibold">My Blog</nav>
// );

// export default Navbar;

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className=" bg-teal-900 text-white p-2 fixed top-0 left-0 right-0 shadow-md z-50 animate-fade-in px-10">
      <div className="flex gap-3 items-center justify-between">

<div class="flex flex-row gap-1 items-center py-3 md:py-2"><a class="inline-block mr-2" href="https://www.petanikode.com/" aria-label="Go to home"><svg viewBox="0 0 64 64" class="w-8 h-8 active:scale-95"><g id="layer1" transform="translate(0 -988.36)"><path id="border-path" class="hover:fill-teal-500" d="m32 991.45c16.017.0 28.911 12.894 28.911 28.911S48.017 1049.272 32 1049.272s-28.911-12.894-28.911-28.911S15.983 991.45 32 991.45z" stroke="#fff" stroke-width="4.9018" fill="teal"></path><path id="hat-path" fill-rule="evenodd" fill="#fff" d="m40.027 1002.9-28.596 8.3852 41.137 18.986z"></path><path id="face-path" fill-rule="evenodd" fill="#fff" d="m21.869 1017.7.14738 5.203.19841 7.0046 2.7399-.4921 2.7642 7.9199 15.535-9.5z"></path></g></svg>
</a><a href="https://www.petanikode.com/" class="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0 7-7 7 7M5 10v10a1 1 0 001 1h3m10-11 2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Home</a>
<a href="https://youtube.com/" target="_blank" class="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12A9 9 0 113 12a9 9 0 0118 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375.0 010 .656l-5.603 3.113a.375.375.0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"></path></svg>
Kelas</a>
<a href="/tutorial/" class="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>Tutorial</a>
<a href="/buku/" class="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747.0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746.0-3.332.477-4.5 1.253"></path></svg> Buku</a>
<a href="https://discord.gg/Xqj8ZwPh5y" rel="noopener" target="_blank" class="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><svg width="16" height="16" fill="currentcolor" class="bi bi-discord" viewBox="0 0 16 16"><path d="M13.545 2.907a13.2 13.2.0 00-3.257-1.011.05.05.0 00-.052.025c-.141.25-.297.577-.406.833a12.2 12.2.0 00-3.658.0 8 8 0 00-.412-.833.05.05.0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04.0 00-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3.0 003.995 2.02.05.05.0 00.056-.019q.463-.63.818-1.329a.05.05.0 00-.01-.059l-.018-.011a9 9 0 01-1.248-.595.05.05.0 01-.02-.066l.015-.019q.127-.095.248-.195a.05.05.0 01.051-.007c2.619 1.196 5.454 1.196 8.041.0a.05.05.0 01.053.007q.121.1.248.195a.05.05.0 01-.004.085 8 8 0 01-1.249.594.05.05.0 00-.03.03.05.05.0 00.003.041c.24.465.515.909.817 1.329a.05.05.0 00.056.019 13.2 13.2.0 004.001-2.02.05.05.0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03.0 00-.02-.019m-8.198 7.307c-.789.0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807.0 1.45.73 1.438 1.613.0.888-.637 1.612-1.438 1.612m5.316.0c-.788.0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807.0 1.451.73 1.438 1.613.0.888-.631 1.612-1.438 1.612"></path></svg> Discord</a></div>

<a href="https://www.petanikode.com/#newsletter" title="Subscribe to our newsletter" class="hidden lg:inline-block px-3 py-2  bg-teal-500 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500"><span class="line-clamp-1">Join Newsletter</span></a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none transition-transform duration-300 transform hover:scale-110"
        >
          {isOpen ? (
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
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`transform transition-transform duration-300 ease-in-out sm:transform-none absolute sm:static bg-teal-900 sm:bg-transparent w-full left-0 px-4 ${
          isOpen ? "translate-y-0 max-h-60 py-4 opacity-100" : "-translate-y-5 max-h-0 opacity-0"
        } sm:max-h-full sm:flex mt-2 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left z-50`}
      >
        <button
          onClick={() => alert("Home clicked")}
          className="block w-full text-left transition duration-200 hover:text-gray-200"
        >
          Home
        </button>
        <button
          onClick={() => alert("Blog clicked")}
          className="block w-full text-left transition duration-200 hover:text-gray-200"
        >
          Blog
        </button>
        <button
          onClick={() => alert("About clicked")}
          className="block w-full text-left transition duration-200 hover:text-gray-200"
        >
          About
        </button>
        <button
          onClick={() => alert("Contact clicked")}
          className="block w-full text-left transition duration-200 hover:text-gray-200"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;