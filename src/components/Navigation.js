import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='flex md:flex-row items-center justify-between flex-col md:mx-32 py-10'>
      {/* logo here */}
      <div>
        <h1 className='text-white font-bold text-lg'>itznur07.dev</h1>
      </div>
      {/* logo ends here */}
      {/* navlink here */}
      <nav>
        <ul className='text-md text-white flex items-center md:space-x-10 space-x-5 font-medium cursor-pointer'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/skills'>
            <li>Skills</li>
          </Link>
          <Link to='/portfolio'>
            <li>Portfolio</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
      {/* navlink ends here */}
    </div>
  );
};

export default Navigation;
