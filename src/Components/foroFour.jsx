import React from 'react';

// This component displays a 404 error page using a responsive layout and a cyan color theme.
// It is designed to be the main App component for single-file deployment.

const foroFour = () => {
  // Placeholder image URL representing the dynamic illustration. 
  // It uses a cyan background to match the requested theme.
  const illustrationUrl = "/src/assets/404.gif";
  
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="max-w-4xl w-full  shadow-2xl rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-16">
        
        {/* Left Section: Illustration Placeholder */}
        <div className=" shrink-0 w-full rounded-full h-1/2 max-w-sreen lg:w-1/2 hover:shadow hover:shadow-cyan-400/50">
          <img
            src={illustrationUrl}
            alt="Illustration of a dynamic figure, symbolizing the page being lost (404 Error)"
            className="w-full h-auto object-contain rounded-xl shadow-xl transition duration-500 hover:shadow-2xl"
            onError={(e) => {
              // Simple fallback for the placeholder image
              e.target.onerror = null; 
              e.target.src = "https://placehold.co/400x400/99f6e4/083344?text=404+ERROR";
            }}
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="flex flex-col space-y-6 text-center lg:text-left lg:w-1/2">
          
          {/* Main Title - Opps! */}
          <h1 className="text-6xl sm:text-7xl font-extrabold text-cyan-500 tracking-tight leading-none">
            Oopps!
          </h1>

          {/* Secondary Headline */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
            We Can't Seem To Find The Page You're Looking For.
          </h2>

          {/* Descriptive Text */}
          <p className="text-lg text-black dark:text-white max-w-lg mx-auto lg:mx-0">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>

          {/* Go To Home Button */}
          <div className="pt-4">
            <a
              href="/" // Link should point to the homepage (or use a router function if available)
              className="inline-block px-10 py-3 text-lg font-bold text-white bg-cyan-500 rounded-xl shadow-lg shadow-cyan-300/50 hover:bg-cyan-600 transition duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-cyan-300"
              role="button"
            >
              Go To Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default foroFour;