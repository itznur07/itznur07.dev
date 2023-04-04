import { useState } from "react";
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changeTheme } from "../app/reducers/themeSlice";

const Footer = () => {
  
  const dispatch = useDispatch();

  const [mode, setMode] = useState(true);
  const handleDark = () => {
    setMode(true);
    dispatch(changeTheme(mode));
  };
  const handleWhite = () => {
    setMode(false);
    dispatch(changeTheme(mode));
  };

  return (
    <div className='flex md:flex-row items-center justify-between flex-col md:mx-32 md:text-start text-center text-[#94A3B8] py-10 '>
      <div className="md:space-y-0 space-y-3">
        <h1 className='text-md'>
          © 2022 Mohammad Nuruddin - All rights reserved. Deployed with Vercel.
        </h1>
        <p className='text-sm flex items-center md:justify-none justify-center'>
          Developed by itznur07 <FaHeart className='ml-2 text-yellow-500' />
        </p>
      </div>
      <div className="mt-2">
        {mode === false ? (
          <div className="flex items-center space-x-2">
            <FaMoon size={24} onClick={() => handleDark()} className='cursor-pointer' /> <span>dark</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <FaSun
            size={24}
            onClick={() => handleWhite()}
            className='cursor-pointer animate-spin'
          />
          <span>light</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Module export 
export default Footer;
