import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import MentionButton from "../components/MentionButton";

const About = () => {
  const { mode } = useSelector((state) => state.theme);

  return (
    <div className='container mx-auto'>
      <div className='md:flex md:flex-row flex flex-col-reverse items-center justify-around md:mx-24 mx-5 md:gap-y-0 gap-y-10 py-28'>
        <div >
          <img className="w-72 h-72 rounded-full border-2 border-white" src="https://avatars.githubusercontent.com/u/76656507?v=4" alt="logo" />
        </div>
        {/* div 1 */}
        <div className='space-y-5'>

          <p className={`text-md text-[${mode.text}] font-medium leading-loose`}>
            Hello, I’m Nur Uddin. a Creative <br /> Frontend Developer. I
            Develop Modern <br /> & Powerful Web Applications & Mobile <br />{" "}
            Application using Javascript Frontend Framework{" "}
          </p>
          <div className='flex items-center md:space-x-5 space-x-3 text-[#94A3B8] cursor-pointer'>
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
        {/* div 1 */}
        {/* div 3 */}
        <div>
          <MentionButton name='About me' rotate='-180' />
        </div>
        {/* div 3 */}
      </div>
    </div>
  );
};

export default About;
