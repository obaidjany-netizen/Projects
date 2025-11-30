import React, { useRef } from "react";
import { Link } from 'react-router';
import Button from "../Components/button";
import { motion, useTransform, useScroll } from 'framer-motion'; 

const ProjectCard = ({ project }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // This offset defines the range in the scroll where the animation happens:
    // "start end": when the bottom of the element hits the bottom of the viewport (progress 0)
    // "center center": when the center of the element hits the center of the viewport (progress 1)
    offset: ["start end", "center center"] 
  });

  // Transform the scroll progress (which goes from ~0 to 1) into an opacity value
  // We make it fade in over the first half of its scroll journey
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // We can add a slight Y translation too for the "slide up" effect
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <motion.section
      ref={containerRef}
      // Apply the dynamic opacity and y transform
      style={{ 
        opacity,
        y 
      }} 
      className=" hover:scale-107
        h-[60vh]  sm:h-[70vh] md:h-[80vh] w-full rounded-4xl bg-white dark:bg-black grid place-content-center overflow-hidden
        sticky top-20 sm:top-24 md:top-28 lg:top-32 mb-10
        hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-400 ease-in-out
      "
    >
        {/* title */}
        <h1
            className=" 
            absolute top-4 lg:bottom-4 left-4 right-4 z-20
            text-3xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-cyan-400
            text-start tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]
            "
        >
            {project.name}
        </h1>

        {/* image div (full view retained) */}
        <motion.div 
            className="absolute inset-0 z-10 overflow-hidden "
        >
            <img
                src={project.url}
                alt={project.name}
                className="h-full  w-full object-contain" // Full image display
            />
        </motion.div>

        {/* button */}
     
         <div className="absolute z-20 right-4 sm:right-8 bottom-6 sm:bottom-8">
            <Link to={project.website}>
                <Button name={project.name} url={project.url} /> {/* Assuming your Button renders a visual button */}
            </Link>
        </div>
    </motion.section>
  );
};


const Project = () => {
  const projects = [
    { id: 1, website:"https://dapper-crepe-c56405.netlify.app/" ,name: "Netflix", url: "/4.PNG", desc: "AWS-style F1 hero with sticky overlapping slides." },
    { id: 2, website:"https://dapper-crepe-c56405.netlify.app/", name: "Trendify", url: "/3.PNG", desc: "Student progress dashboard with charts and filters." },
    { id: 3, website:"https://dainty-hotteok-5f517a.netlify.app/", name: "Enderial Technologies", url: "/2.PNG", desc: "Landing page for a trading brand with animated hero." },
    { id: 4, website:"https://poetic-pie-73cb51.netlify.app/", name: "Netflix HTML/CSS", url: "/1.PNG", desc: "Landing page for a trading brand with animated hero." },
    { id: 5, website:"https://tubular-heliotrope-f5535a.netlify.app/", name: "Music Player", url: "/5.PNG", desc: "Landing page for a trading brand with animated hero." },
    { id: 6, website:"https://subtle-cucurucho-bce615.netlify.app/", name: "Secured Finance Network", url: "/6.PNG", desc: "Landing page for a trading brand with animated hero." }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <main className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 sticky top-0">
        
        <div className="max-w-5xl rounded-4xl  mx-auto w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Project;
