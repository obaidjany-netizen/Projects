import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router";
const HeroText = () => {
  return (
    <div className="text-black dark:text-white leading-18 lg:leading-28 text-2xl md:text-5xl xl:text-8xl p-10 w-screen md:w-1/2 z-2 ">
      <h2 className="font-poppins font-light italic">Hi,</h2>

      <h1 className="font-poppins font-light italic whitespace-nowrap tracking-wide">
        Obaid Ur Rehman-
      </h1>

      <h1 className="font-semibold head italic text-5xl lg:text-8xl xl:text-[140px] text-cyan-500 tracking-widest">
        <Typewriter
          options={{
            strings: ["Developer", "Designer", "Student", "Entrepreneur"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div>
        <p className="text-[24px] pt-20 leading-10 ">
          Turn designs into modern, fully developed websites using clean, <br />{" "}
          responsive code. Turn design concepts into real, high‑performance web
          experiences ready for users.
        </p>
        <Link to="https://wa.me/923483116357">
          <div className="text-black dark:text-white">
            <button
              className="mt-10 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium text-cyan-500
 transition duration-300 ease-out border-2 border-black dark:border-cyan-500 rounded-full shadow-md group"
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
                Hire Me
              </span>
              <span className="relative text-base font-semibold invisible">
                Hire Me
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
