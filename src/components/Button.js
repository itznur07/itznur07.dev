import React from "react";

const Button = ({ name, cstyle }) => {
  return (
    <div>
      <button
        className={`text-[#fff] md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md ${cstyle}  border border-red-500`}
      >
        {name}
      </button>
    </div>
  );
};

// componetns export

export default Button;
