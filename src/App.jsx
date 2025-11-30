import React, { useState, useEffect } from "react";
import Header from "./Pages/Header";
import Hero from "./Pages/hero";
import About from "./Pages/about";
import Skills from "./Pages/skillssection";
import Projects from "./Pages/project";
import Footer from "./Pages/Footer";
import Loader from "./Pages/LoadingSpinner";
import FouroFour from "./Components/foroFour";
import { Routes, Route } from "react-router";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for async page data fetch
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white dark:bg-black z-11">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<FouroFour />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
