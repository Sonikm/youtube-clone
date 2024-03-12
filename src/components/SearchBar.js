import React from "react";
import searchIcon from "../assets/search-icon.svg";
import searchIconDark from "../assets/search-icon-dark.svg";
import micIcon from "../assets/mic.svg";
import micIconDark from "../assets/mic-dark.svg";
import useTheme from "../contexts/ThemeContext";

function SearchBar() {
  const { themeMode } = useTheme();

  return (
    <form className="flex col-span-3 gap-4   ">
      <div className="border border-gray-300   dark:border-gray-800  flex-1 flex rounded-3xl overflow-hidden ">
        <input
          className="flex-1  dark:focus:border-blue-500 dark:text-white dark:placeholder:text-gray-400  dark:border-gray-800  dark:bg-black  focus:border-blue-600 border-[1px] 	 outline-none border-gray-300 px-6  rounded-full rounded-r-none"
          type="text"
          placeholder="Search"
        />
        <button
          type="Search"
          className="p-2   dark:bg-[#222222]  px-6  border-gray-300 bg-gray-100"
        >
          <img
            className="w-5"
            src={themeMode === "dark" ? searchIconDark : searchIcon}
            alt="search"
          />
        </button>
      </div>
      <div className="bg-gray-200 dark:bg-[#222222]  rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
        <img
          className="w-6"
          src={themeMode === "dark" ? micIconDark : micIcon}
          alt="mic"
        />
      </div>
    </form>
  );
}

export default SearchBar;
