import React from "react";
import Button from "../Components/button";
import "remixicon/fonts/remixicon.css";
import './heading.css';
import { motion, useInView } from 'framer-motion'; 
import { Link } from "react-router";


// Define animation variants for the card appearance
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 100, // Start 100px below its final position
    scale: 0.95,
    rotateX: 10 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8
    }
  },
};

const AboutCard = ({ institution, degree, duration, description, icon,resultUrl }) => {
  const ref = React.useRef(null);
  
  // *** KEY CHANGE: Set 'once' to false ***
  const isInView = useInView(ref, { once: false, amount: 0.3 }); 

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      // Use isInView to toggle between hidden and visible states on every scroll action
      animate={isInView ? "visible" : "hidden"} 
      className="about text-black dark:text-white text-sm"
    >
      <div className="card border-2 border-black dark:border-cyan-500 px-2 py-4 rounded-xl xl:w-[50vw] w-full gap-10 flex justify-between items-center">
        
        <motion.div 
            className="hidden md:block icon text-[120px] xxl:text-[200px] dark:text-cyan-500"
            whileHover={{ scale: 1.1, rotate: -10 }} 
            transition={{ type: "spring", stiffness: 400 }}
        >
          <i className={icon}></i>
        </motion.div>

        <div>
          <h1 className="font-extrabold tracking-widest text-2xl py-2">{degree}</h1>
          <h2 className="italic">{institution}</h2>
          <h2 className="italic">{duration}</h2>
          <p className="text-[14px] py-2">
           {description}
          </p>
          <p className="text-[14px] py-2">Click the button below to verify results.</p>
          <Link to={resultUrl}>
                <Button /> {/* Assuming your Button renders a visual button */}
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;
