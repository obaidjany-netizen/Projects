import React, { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading finish after 2 seconds, then start fade out
    const timeoutId = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main
      className={`w-screen h-screen flex justify-center items-center bg-white dark:bg-black transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-live="polite"
      aria-busy={!fadeOut}
    >
      <div className="pl fixed inset-0 bg-black flex justify-center items-center w-screen h-screen scale-200 z-50">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="pl__dot"></div>
        ))}
        <div className="pl__text">Loading…</div>
      </div>
    </main>
  );
};

export default LoadingSpinner;
