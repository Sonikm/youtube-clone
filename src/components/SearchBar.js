import React from "react";
import searchIcon from "../assets/search-icon.svg";
import searchIconDark from "../assets/search-icon-dark.svg";
import micIcon from "../assets/mic.svg";
import micIconDark from "../assets/mic-dark.svg";
import useTheme from "../contexts/ThemeContext";
import VideoSearchSuggestions from "./VideoSearchSuggestions";
import { useDispatch, useSelector } from "react-redux";
import { showSuggetions } from "../utils/appSlice";
import { searchQuery } from "../utils/searchSlice";

function SearchBar() {
  const { themeMode } = useTheme();
  const dispatch = useDispatch();
  const isShowSuggestions = useSelector((store) => store.app.suggestions);
  const query = useSelector((store) => store.search.query);

  function handleVideoSearch(text) {
    dispatch(searchQuery(text));
  }

  function handleSuggestions(show) {
    dispatch(showSuggetions(show));
  }

  return (
    <form className="flex col-span-3 gap-4 relative ">
      <div className="flex flex-col ">
        <div className="border border-gray-300 w-[560px]   dark:border-gray-800  flex-1 flex rounded-3xl overflow-hidden ">
          <input
            value={query}
            onChange={(e) => handleVideoSearch(e.target.value)}
            className="flex-1  dark:focus:border-blue-500 dark:text-white dark:placeholder:text-gray-400  dark:border-gray-800  dark:bg-black  focus:border-blue-600 border-[1px] 	 outline-none border-gray-300 px-6  rounded-full rounded-r-none"
            type="text"
            placeholder="Search"
            onFocus={() => handleSuggestions(true)}
            onBlur={() => handleSuggestions(false)}
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
        {isShowSuggestions && <VideoSearchSuggestions />}
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
