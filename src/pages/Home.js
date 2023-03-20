import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter
} from "react-icons/fa";
import TypingAnimation from "../components/TypeAnimation";

const Home = () => {
  return (
    <div className='md:mx-32 flex items-center justify-center h-96 py-64'>
      {/* profile info card here */}
      <div className='flex flex-col items-center md:space-y-3'>
        <img
          className='w-36 h-36 rounded-full'
          loading='lazy'
          src='https://avatars.githubusercontent.com/u/76656507?v=4'
          alt='logo.png'
        />
        <h1 className='text-3xl text-white font-bold'>Mohammad Nuruddin</h1>
        <p className='text-xl text-[#94A3B8] font-medium'>
          <TypingAnimation text='Developer'/>
        </p>
        <div className='flex items-center md:space-x-5 text-[#94A3B8] cursor-pointer'>
          <FaGithub size={20} className='hover:text-blue-500' />
          <FaTwitter size={20} className='hover:text-blue-500' />
          <FaLinkedin size={20} className='hover:text-blue-500' />
          <FaMedium size={20} className='hover:text-blue-500' />
          <FaInstagram size={20} className='hover:text-blue-500' />
        </div>
      </div>
      {/* profile info card ends here */}
    </div>
  );
};

export default Home;
