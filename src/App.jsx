import React from "react";
import Header from "./Pages/header";
import Hero from "./Pages/hero";
import About from "./Pages/about";
import Skills from "./Pages/skillssection";
import Projects from "./Pages/project";
import Footer from "./Pages/footer";
import FouroFour from "./Components/foroFour";
import { Routes, Route,Link } from "react-router";

const App = () => {
  return (
    <div className="bg-white dark:bg-black z-11">
      <Header/>
      <Routes>

       <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/result/resultName:" element={ <About />} />
         <Route path="*" element={<FouroFour/>} />
    
      </Routes>
      <Footer/>
      
     
    </div>
  );
};

export default App;
