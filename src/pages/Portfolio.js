import React from "react";

// import icons
import { SiGithub } from "react-icons/si";
import { VscLiveShare } from "react-icons/vsc";
import { useSelector } from "react-redux";
import MentionButton from "../components/MentionButton";

const Protfolio = () => {
  return (
    <>
      <div className='cotainer mx-auto items-center md:flex-none flex justify-center hidden-none'>
        <div className='md:flex items-center md:justify-between justify-center md:gap-x-10 md:mx-24 h-auto mt-20 md:py-0 py-5'>
          <div className='md:ml-0'>
            <MentionButton name='Portfolio' />
          </div>

          <div className='md:space-y-10 md:mt-0 mt-7 md:ml-0'>
            <div className='md:flex flex-wrap items-center md:gap-x-10 gap-y-10 md:space-y-0 space-y-5 md:mt-0 mt-10'>
              <Card
                name='Developer Portfolio'
                describe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga perspiciatis magni error ipsum ducimus.'
                repolink='https://github.com/itznur07/m-design-portfolio'
                livelink='https://m-design-portfolio.vercel.app/'
              />
              <Card
                name='Pixbay'
                describe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga perspiciatis magni error ipsum ducimus.'
                repolink='https://github.com/itznur07/Pixabay_Clone_Reactjs_Tailwindcss'
                livelink='https://gracious-wiles-6398e8.netlify.app/'
              />
              <Card
                name='Logistics'
                describe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga perspiciatis magni error ipsum ducimus.'
                repolink='https://github.com/itznur07/edusy'
                livelink='https://edusy-qkziw5nhb-itznur07.vercel.app/'
              />
              <Card
                name='Doctor Portal'
                repolink='https://github.com/itznur07/edusy'
                livelink='https://edusy-qkziw5nhb-itznur07.vercel.app/'
              />
              <Card
                name='Agency'
                repolink='https://github.com/itznur07/edusy'
                livelink='https://edusy-qkziw5nhb-itznur07.vercel.app/'
              />
              <Card
                name='Desi Bazar'
                repolink='https://github.com/itznur07/edusy'
                livelink='https://edusy-qkziw5nhb-itznur07.vercel.app/'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 *
 * @param {*} param0
 * @returns
 */
const Card = ({ name, describe, tags, repolink, livelink }) => {
  const { mode } = useSelector((state) => state.theme);

  return (
    <div
      style={{ borderColor: mode.text }}
      className={`md:w-80 w-72 h-auto py-5 bg-[${mode.bg}] rounded md:flex items-center justify-center cursor-pointer hover:bg-white group transition ease-linear duration-200 border border-opacity-30`}
    >
      <div className='flex flex-col items-center gap-y-5'>
        <h1
          className={`text-[${mode.text}] text-2xl  group-hover:text-black font-semibold`}
        >
          {name}
        </h1>
        <p
          className={`text-center text-sm text-[${mode?.text}] group-hover:text-black`}
        >
          {describe}
        </p>
        <span
          className={`flex text-xl group-hover:text-black  space-x-5 text-[${mode.text}]`}
        >
          <a href={repolink} target='_blank' rel='noreferrer'>
            <SiGithub />
          </a>
          <a href={livelink} target='_blank' rel='noreferrer'>
            <VscLiveShare />
          </a>
        </span>
        <div className='text-center flex items-center space-x-5 mt-2'>
          {tags?.map((item, i) => (
            <span
              key={i}
              className={`bg-[${mode.bg}] px-3 py-1 rounded-md text-[${mode.text}]`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
