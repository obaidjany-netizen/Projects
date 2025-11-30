import React from "react";
import AboutMe from "../Components/aboutCard";
const about = () => {
  const educationData = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Capital University of Science & Technology",
      duration: "Sep 2025 – Nov 2029",
      description:
        "Currently pursuing a Bachelor's degree with a focus on foundational software engineering principles. In my first semester, I am engaging with core modules like Introduction to Computing and Programming Fundamentals to build a strong logic and coding base.",
      resultUrl: "https://placeholder.com/your-cust-transcript-link",
      icon: `ri-macbook-line`,
    },
    {
      degree: "Intermediate (ICS)",
      institution: "Astron College of Science and Commerce",
      duration: "Sep 2023 – Aug 2025",
      description:
        "Achieved an 'A' grade with a strong focus on core technical subjects, including Physics, Mathematics, and Computer Science.",
      resultUrl: "https://drive.google.com/file/d/1L0XECqeUdVlMZAZjSwqb5hu3ghY45oGs/view",
      icon: `ri-book-shelf-line`,
    },
    {
      degree: "Matriculation (Science Group)",
      institution: "Silver Oaks School and Colleges",
      duration: "Mar 2021 – Jul 2023",
      description:
        "Secured an 'A++' grade while mastering fundamental sciences such as Mathematics, Physics, Chemistry, and Computer Science.",
      resultUrl: "https://drive.google.com/file/d/1ChE3L0UoKvegQIYSHpi9QtdQYuYck7XG/view",
      icon: `ri-school-line`,
    },
  ];

  return (
    <div className="text-black dark:text-white py-30 w-screen  gap-10 flex justify-between flex-col xl:flex-row  overflow-y-scroll overflow-x-hidden">
      <div className="flex justify-start p-10 items-start flex-col relative xl:sticky top-0 z-2 w-[40vw]">
        <h1 className="head italic font-light text-[60px] md:text-[60px] whitespace-nowrap xl:text-[120px] xxl:text-[170px]">
          About me
        </h1>
        <p className="py-4 italic text-1xl md:text-2xl w-[90vw] xl:w-auto  ">
          An ambitious and detail-oriented developer transitioning from a strong
          C++ and general computer science background into professional frontend
          development. Equipped with foundational expertise in JavaScript and
          React, I have successfully built several small web projects to apply
          theoretical knowledge practically. I am highly motivated to expand my
          skills, contribute immediately to project teams, and grow within the
          software engineering field.
        </p>
      </div>
      <div className="relative grid grid-cols-1 place-items-baseline gap-8 p-3 lg:p-20 z-2 ">
        {educationData.map((e, idx) => {
          return (
            <AboutMe
              key={idx}
              degree={e.degree}
              institution={e.institution}
              icon={e.icon}
              duration={e.duration}
              description={e.description}
              resultUrl={e.resultUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default about;
