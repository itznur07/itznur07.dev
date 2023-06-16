import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { mode } = useSelector((state) => state.theme);

  return (
    <div className='flex md:flex-row items-center justify-between flex-col md:mx-32 py-10'>
      <div>
        <h1 className={`text-[${mode.text}] font-bold text-lg`}>
          <Link to='/'>itznur07.dev</Link>
        </h1>
      </div>

      <nav>
        <ul
          className={`text-md text-[${mode.text}] flex items-center md:space-x-10 space-x-5 font-medium`}
        >
          <Link to='/'>
            <li className='hover:border-b-2 border-yellow-500'>Home</li>
          </Link>
          <Link to='/skills'>
            <li className='hover:border-b-2 border-yellow-500'>Skills</li>
          </Link>
          <Link to='/portfolio'>
            <li className='hover:border-b-2 border-yellow-500'>Portfolio</li>
          </Link>
          <Link to='/about'>
            <li className='hover:border-b-2 border-yellow-500'>About</li>
          </Link>
          <li className='rounded px-4 py-1.5 bg-yellow-500'>
            <a
              href='https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing'
              target={"_blank"}
              rel='noreferrer'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
