import React from "react";
import {
  FaGithub,
  FaInstagram, FaLinkedin, FaMedium,
  FaTwitter
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
import TypingAnimation from "../components/TypeAnimation";
const Home = () => {
  return (
    <div className='md:mx-32 flex items-center justify-center h-96 py-64'>
      {/* profile info card here */}
      <div className='flex flex-col items-center md:space-y-3'>
        <img
          className='w-36 h-36 rounded-full border-2 border-white mb-3'
          loading='lazy'
          src='https://avatars.githubusercontent.com/u/76656507?v=4'
          alt='logo.png'
        />
        <h1 className='text-3xl text-white font-bold'>Mohammad Nuruddin</h1>
        <p className='text-xl text-[#94A3B8] font-medium'>
          <TypingAnimation text='Developer' />
        </p>
        <div className='flex items-center md:space-x-5 text-[#94A3B8] cursor-pointer'>
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
          className='absolute text-yellow-500 top-52 left-44'
        />
        <SiReact
          size={28}
          className='absolute text-blue-500 top-64 left-96 ml-16 animate-spin'
        />
        <SiNextdotjs
          size={24}
          className='absolute text-white bottom-72 left-52'
        />
        <SiTailwindcss
          size={26}
          className='absolute text-[#38BDF8] bottom-56 ml-16 left-96'
        />
        <SiRedux
          size={24}
          className='absolute text-[#38BDF8] bottom-96 ml-16 left-64'
        />
        {/*  */}
        <SiAndroidstudio
          size={24}
          className='absolute text-[#5FEAAC] top-52 right-44'
        />
        <SiNodedotjs
          size={24}
          className='absolute text-[#5F9856] top-64 right-96 ml-16'
        />
        <SiExpress
          size={24}
          className='absolute text-white bottom-72 right-52'
        />
        <SiMongodb
          size={26}
          className='absolute text-[#00ED64] bottom-56 ml-16 right-96'
        />
        <SiFirebase
          size={24}
          className='absolute text-[#FFCB2D] bottom-96  right-72'
        />
      </div>
    </div>
  );
};

export default Home;
