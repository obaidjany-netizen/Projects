import React from "react";
import IconsRow from "../Components/iconrow";

const skillsLeft = [
  { label: "UI Design", value: 90 },
  { label: "Product Design", value: 40 },
  { label: "User Research", value: 70 },
];

const skillsRight = [
  { label: "Coding", value: 80 },
  { label: "No Code Tools", value: 35 },
];
const skillsLanguages=[{name:"JavaScript",url:"ri-javascript-fill",color:'Yellow'},
  {name:"React",url:"ri-reactjs-line",color:'white'},
  {name:"CSS",url:"ri-css3-fill" , color:'blue'},
  {name:"Html 5",url:"ri-html5-fill", color:'orange'},];


const Slider = ({ value }) => (
  <div className="relative w-full h-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900">
    <div
      className="absolute top-0 left-0 h-1.5 rounded-full bg-black dark:bg-cyan-400"
      style={{ width: `${value}%` }}
    />
    <div
      className="absolute -top-1.5"
      style={{ left: `calc(${value}% - 10px)` }}
    >
      <div className="w-5 h-5 rounded-full border border-cyan-300 dark:border-cyan-500 bg-white dark:bg-slate-700" />
    </div>
  </div>
);

const SectionHeader = () => (
  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
    <div>
      <p className="text-sm tracking-[0.25em] uppercase text-cyan-300">
        My Professional
      </p>
      <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-black dark:text-white">
        Background Skills and
        <br /> Accomplishments
      </h1>
    </div>
    <p className="max-w-md text-sm text-black dark:text-white">
      Proficient Frontend Developer specializing in JavaScript (ES6+) and the
      React ecosystem. Strong foundational knowledge in C++ and modular web
      application development.
    </p>
  </div>
);

const IconCard = ({ children }) => (
  <div className="flex items-center justify-center rounded-[2.5rem] border
   border-cyan-500/40 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-md aspect-4/5]">
    {children}
  </div>
);



const SkillRow = ({ label, value }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-lg text-black dark:text-cyan-500">{label}</span>
      <span className="text-sm text-black dark:text-cyan-500">
        {value}%
      </span>
    </div>
    <Slider value={value} />
  </div>
);

const SkillsColumn = ({ title, skills }) => (
  <div className={title ? "space-y-6" : "space-y-5"}>
    {skills.map((skill) => (
      <SkillRow key={skill.label} label={skill.label} value={skill.value} />
    ))}
  </div>
);

const ToolsChips = () => (
  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-200">
    <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-cyan-500/40">
      React JS
    </span>
    <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-cyan-500/40">
      Tailwind
    </span>
    <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-cyan-500/40">
      Figma
    </span>
  </div>
);

const SkillsGrid = () => (
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <SkillsColumn skills={skillsLeft} />
    <div className="space-y-6">
      <SkillsColumn skills={skillsRight} />
      <ToolsChips />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-[linear-gradient(-150deg,transparent,transparent,#007595)] px-6 py-10">
      <div className="max-w-7xl w-full">
        <SectionHeader />
        <div className="flex justify-center items-center ">

       
        {skillsLanguages.map((e,idx)=>{
          return  <IconsRow key={idx} name={e.name} url={e.url} />

        })}
         </div>
       
        <SkillsGrid />
      </div>
    </section>
  );
};

export default SkillsSection;
