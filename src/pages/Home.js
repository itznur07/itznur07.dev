import React from "react";
import {
  FaGithub,
  FaInstagram, FaLinkedin, FaMedium, FaTwitter
} from "react-icons/fa";
import {
  SiAndroidstudio,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss
} from "react-icons/si";
import { useSelector } from 'react-redux';
import TypingAnimation from "../components/TypeAnimation";
const Home = () => {

  const { mode } = useSelector((state) => state.theme);

  return (
    <div className='md:mx-32 flex items-center justify-center h-96 py-64 overflow-hidden'>
      {/* profile info card here */}
      <div className='flex flex-col items-center md:space-y-3 '>
        <img
          className={`w-36 h-36 rounded-full border-2 border-white mb-3 `}
          loading='lazy'
          src='https://avatars.githubusercontent.com/u/76656507?v=4'
          alt='logo.png'
        />
        
        <h1 className={`md:mt-0 mt-5 text-3xl text-[${mode?.text}] font-bold`}>Mohammad Nuruddin</h1>
        <p className={`md:mt-0 mt-2 text-xl text-[${mode?.optionalColor}] font-medium`}>
          <TypingAnimation text='Developer' />
        </p>
        <div className='flex items-center md:space-x-5 space-x-3 md:mt-0 mt-3 text-[#94A3B8] cursor-pointer'>
          <a
            href='https://github.com/itznur07'
            target={"_blank"}
            rel='noreferrer'
          >
            <FaGithub size={20} className='hover:text-yellow-500' />
          </a>
          <a
            href='https://twitter.com/itznur07'
            target={"_blank"}
            rel='noreferrer'
          >
            <FaTwitter size={20} className='hover:text-yellow-500' />
          </a>
          <a
            href='https://www.linkedin.com/in/itznur07/'
            target={"_blank"}
            rel='noreferrer'
          >
            <FaLinkedin size={20} className='hover:text-yellow-500' />
          </a>
          <a
            href='https://itznur07.medium.com/'
            target={"_blank"}
            rel='noreferrer'
          >
            <FaMedium size={20} className='hover:text-yellow-500' />
          </a>
          <a
            href='https://www.instagram.com/itznur07/'
            target={"_blank"}
            rel='noreferrer'
          >
            <FaInstagram size={20} className='hover:text-yellow-500' />
          </a>
          
        </div>
      </div>
      {/* icons fly */}
      <div>
        <SiJavascript
          size={24}
          className='absolute text-yellow-500 md:top-52 md:left-44 top-44 left-32'
        />
        <SiReact
          size={28}
          className='absolute text-blue-500 md:top-64 top-52 md:left-96 left-72 md:ml-16 animate-spin'
        />
        <SiNextdotjs
          size={24}
          className={`absolute text-[${mode?.text}] md:bottom-72 bottom-96 md:left-52`}
        />
        <SiTailwindcss
          size={26}
          className='absolute text-[#38BDF8] md:bottom-56 bottom-32 md:ml-16 md:left-96'
        />
        <SiRedux
          size={24}
          className='absolute text-[#38BDF8] md:bottom-96 bottom-96 md:ml-16 md:left-64 left-20'
        />
        {/*  */}
        <SiAndroidstudio
          size={24}
          className='absolute text-[#5FEAAC] md:top-52 md:right-44'
        />
        <SiNodedotjs
          size={24}
          className={`absolute text-[#5F9856] md:top-64 md:right-96 md:ml-16`}
        />
        <SiExpress
          size={24}
          className={`absolute text-[${mode?.text}] md:bottom-72 md:right-52`}
        />
        <SiMongodb
          size={26}
          className='absolute text-[#00ED64] md:bottom-56 md:ml-16 md:right-96'
        />
        <SiFirebase
          size={24}
          className='absolute text-[#FFCB2D] md:bottom-96  md:right-72'
        />
      </div>
    </div>
  );
};

export default Home;
