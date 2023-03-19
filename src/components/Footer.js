import React from "react";
import { FaHeart, FaMoon } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex md:flex-row items-center justify-between flex-col md:mx-32 md:text-start text-center text-[#94A3B8] py-10'>
      <div>
        <h1 className='text-md'>
          © 2022 Mohammad Nuruddin - All rights reserved. Deployed with Vercel.
        </h1>
        <p className='text-sm flex items-center'>
          Developed by itznur07 <FaHeart className="ml-2 text-red-500"/>
        </p>
      </div>
      <div>
        <FaMoon className='cursor-pointer' />
      </div>
    </div>
  );
};

export default Footer;
