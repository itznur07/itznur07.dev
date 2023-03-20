import React from "react";
import {
  SiAndroidstudio,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss
} from "react-icons/si";
import MentionButton from "../components/MentionButton";

const Skills = () => {
  const skills = [
    { icon: <SiJavascript />, name: "Javascript", lavel: "Intermediate" },
    { icon: <SiReact />, name: "Reactjs", lavel: "Intermediate" },
    { icon: <SiTailwindcss />, name: "Tailwindcss", lavel: "Junior" },
    { icon: <SiNodedotjs />, name: "Node.Js", lavel: "Junior" },
    { icon: <SiExpress />, name: "Express.js", lavel: "Junior" },
    { icon: <SiMongodb />, name: "MongoDB", lavel: "Junior" },
    { icon: <SiNextdotjs />, name: "Next.JS", lavel: "Junior" },
    { icon: <SiGithub />, name: "Github", lavel: "Advanced" },
    { icon: <SiAndroidstudio />, name: "React Native", lavel: "Junior" },
    { icon: <SiRedux />, name: "Redux", lavel: "Junior" },
    { icon: <SiFirebase />, name: "Firebase", lavel: "Junior" },
  ];

  return (
    <div className='container mx-auto'>
      <div className='md:flex items-center md:justify-between justify-center md:mx-24 md:my-16 mt-20 md:h-96 h-auto md:space-y-0 space-y-10 md:space-x-20 md:py-0 py-5'>
        {/* div 1 */}
        <div className='md:ml-0 ml-36'>
          <MentionButton name='Skills' />
        </div>
        {/* div 1 */}
        {/* div 2 */}
        <div className='md:space-y-10'>
          {/* skill navbar */}
          {/* skill card */}
          <div className='flex flex-wrap gap-10 md:mx-0 mx-16 md:mt-0 mt-10'>
            {skills.map((tool) => (
              <Card icon={tool.icon} name={tool.toolName} lavel={tool.lavel} />
            ))}
          </div>
          {/* skill card */}
        </div>
        {/* div 2 */}
      </div>
    </div>
  );
};

// skill card

const Card = ({ icon, name, lavel }) => {
  return (
    <div className='flex items-center justify-between rounded w-80 px-5 h-20 py-5 bg-[#1d293a] border border-yellow-500 border-opacity-30'>
      <div className={`text-5xl text-yellow-500`}>{icon}</div>
      <div className='space-y-3 text-right'>
        <h1 className='text-xl text-white font-bold'>{name}</h1>
        <span className='text-sm text-[#94A3B8] font-medium '>{lavel}</span>
      </div>
    </div>
  );
};

export default Skills;
