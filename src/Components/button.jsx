import React from "react";

const button = () => {
  return (
    <div className="text-black dark:text-white">
      <button
        className="relative inline-flex items-center justify-center px-3 py-2 overflow-hidden font-medium text-cyan-500
 transition duration-300 ease-out border-2 border-black dark:border-cyan-500 rounded-lg shadow-md group"
      >
        <span
          className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full
  bg-black dark:bg-cyan-500 group-hover:translate-x-0 ease"
        >
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center text-base font-semibold justify-center w-full h-full text-black dark:text-cyan-500 transition-all duration-300 transform group-hover:translate-x-full ease">
          View
        </span>
        <span className="relative text-base font-semibold invisible">
          Button Text
        </span>
      </button>
    </div>
  );
};

export default button;
