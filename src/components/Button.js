import React from "react";

function Button({ text , onClick}) {

  return (
    <div
      onClick={onClick}
      className="bg-gray-200 first:bg-black first:text-white  dark:bg-[--primaryGrayDark] dark:first:bg-white dark:first:text-black dark:hover:bg-[#454545] dark:text-white text-nowrap text-sm cursor-pointer font-bold p-[6px] px-4 rounded-xl  dark:first:hover:bg-white
    "
    >
      {text}
    </div>
  );
}

export default Button;
