import React from "react";
import searchIcon from "../assets/search-icon.svg";
import searchIconDark from "../assets/search-icon-dark.svg";

function Suggestion({ suggestion }) {
  return (
    <li className="flex items-center gap-2 font-semibold hover:bg-gray-200 dark:hover:bg-[#333333] dark:text-white cursor-pointer p-2 rounded-lg">
      <img className="w-4" src={searchIconDark} alt="" />
      <p>{suggestion}</p>
    </li>
  );
}

export default Suggestion;
