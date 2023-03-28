import React from "react";
import { AiOutlineLine } from "react-icons/ai";

const MentionButton = ({ name }) => {
  return (
    <div className='flex items-center text-[#94A3B8] gap-y-2 md:-rotate-90 text-xl  font-medium'>
      <AiOutlineLine />
      <span className='uppercase bg-[#1d293a]  py-2 px-5 rounded-md font-bold'>
        {name}
      </span>
      <AiOutlineLine />{" "}
    </div>
  );
};

export default MentionButton;
