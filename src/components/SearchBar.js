import React from "react";
import micIcon from "../assets/mic.svg";
import searchIcon from "../assets/search-icon.svg";

function SearchBar() {
  return (
    <div className="flex justify-center items-center relative  ">
      <input
        className="border rounded-3xl p-2 pl-4 w-[500px] placeholder:text-gray-500 border-gray-300 placeholder:font-medium outline-0 "
        type="text"
        placeholder="Search"
      />
      <button className="w-16 h-10 absolute right-0 border-l flex justify-center items-center border-gray-300">
        <img className="w-6" src={searchIcon} alt="search icon" />
      </button>
      <button className="bg-gray-100 p-2 rounded-full absolute -right-12 ">
        <img src={micIcon} alt="mic" />
      </button>
    </div>
  );
}

export default SearchBar;
