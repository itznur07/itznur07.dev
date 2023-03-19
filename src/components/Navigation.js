import React from "react";

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
          <li>Home</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>About</li>
        </ul>
      </nav>
      {/* navlink ends here */}
    </div>
  );
};

export default Navigation;
