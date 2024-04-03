import React from "react";
import { useSelector } from "react-redux";

function Button({ text , onClick}) {
  const category = useSelector(store => store.category.category);

  return (
    <div
      onClick={onClick}
      className={`${category === text ? "bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white " : " bg-gray-200"}   dark:bg-[--primaryGrayDark]    dark:text-white dark:hover:bg-[--secondary] text-nowrap text-sm cursor-pointer font-bold p-[6px] px-4 rounded-xl  `} >
      {text}
    </div>
  );
}

export default Button;
