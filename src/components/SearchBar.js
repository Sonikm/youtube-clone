import React from "react";
import searchIcon from "../assets/search-icon.svg";
import micIcon from "../assets/mic.svg";

function SearchBar() {
  return (
    <form className="flex col-span-3 gap-4    ">
      <div className="border border-gray-300 flex-1 flex rounded-3xl overflow-hidden ">
        <input
          className="flex-1 text-lg placeholder:text-lg outline-none border-gray-300 px-6  border-r-0 rounded-full rounded-r-none"
          type="text"
          placeholder="Search"
        />
        <button
          type="Search"
          className="p-2 px-6 border-l border-gray-300 bg-gray-100"
        >
          <img className="w-5" src={searchIcon} alt="search" />
        </button>
      </div>
      <div className="bg-gray-200 ease-out duration-100 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
        <img className="w-6" src={micIcon} alt="mic" />
      </div>
    </form>
  );
}

export default SearchBar;
