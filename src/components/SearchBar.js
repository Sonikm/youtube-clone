import React, { useEffect, useRef } from "react";
import searchIcon from "../assets/search-icon.svg";
import searchIconDark from "../assets/search-icon-dark.svg";
import micIcon from "../assets/mic.svg";
import micIconDark from "../assets/mic-dark.svg";
import useTheme from "../contexts/ThemeContext";
import VideoSearchSuggestions from "./VideoSearchSuggestions";
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../utils/searchSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { showSuggetions } from "../utils/appSlice";
import clearIcon from "../assets/clear_icon.svg";
import clearIconDark from "../assets/clear_icon_dark.svg";
import leftArrow from '../assets/left-arrow.svg';
import leftArrowDark from "../assets/left-arrow-dark.svg";

function SearchBar({ onHandleSearchbar, isSearch }) {
  // Fetching theme mode from ThemeContext
  const { themeMode } = useTheme();

  // Redux hooks to dispatch actions and get data from store
  const dispatch = useDispatch();
  const query = useSelector((store) => store.search.query);
  const isShowSuggestions = useSelector((store) => store.app.suggestions);

  // Refs for form and input elements
  const formRef = useRef(null);
  const inputRef = useRef(null);

  // Navigate hook for handling navigation
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  // Function to toggle suggestion visibility
  function toggleSuggestions(isShow) {
    dispatch(showSuggetions(isShow));
  }

  // Function to handle clicks outside the form to hide suggestions
  function handleOutsideClick(event) {
    if (formRef.current && !formRef.current.contains(event.target)) {
      toggleSuggestions(false);
    }
  }

  // Effect hook to add and remove event listener for clicks outside the form
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Function to handle video search
  function handleVideoSearch(text) {
    dispatch(searchQuery(text));
    // Show suggestions if the input is focused or has non-empty text
    if (isInputFocused() || text.trim() !== "") {
      toggleSuggestions(true);
    } else {
      toggleSuggestions(false);
    }
  }

  // Function to handle form submission
  function handleSubmitForm(e) {
    e.preventDefault();

    // Check if the current path doesn't start with "/result" and navigate accordingly
    const currentPath = window.location.pathname;
    if (query !== "") {
      if (!currentPath.startsWith("/result" && query !== "")) {
        navigate("/result");
      }
      // Set search params and hide suggestions when the form is submitted
      setSearchParams({ query: query });
      toggleSuggestions(false);
    }
  }

  // Function to check if the input is focused
  const isInputFocused = () => {
    return document.activeElement === inputRef.current;
  };

  return (
    <form
      ref={formRef}
      className={`${
        isSearch ? " justify-center items-center  md:flex-1  " : "md:hidden "
      } flex  gap-4 relative flex-1 max-w-[650px]  `}
      onSubmit={handleSubmitForm}
      onFocus={() => toggleSuggestions(true)}
    >
      <div  onClick={() => onHandleSearchbar(false)} className={`${isSearch ? " md:scale-100  " : "   "} scale-0 flex  flex-none  rounded-full w-10 h-10  xs:w-8 xs:h-8 justify-center items-center cursor-pointer`}>
        <img className="w-6 xs:w-5"
         
          src={themeMode === "dark" ? leftArrowDark : leftArrow}
          alt=""
        />
      </div>

      <div className="flex flex-col w-full ">
        <div
          className={`${
            isSearch ? "md:flex-1   " : "     "
          } border border-gray-300  max-w:w-[560px] xs:w-[250px]  dark:border-gray-800 flex-1 flex rounded-3xl overflow-hidden relative`}
        >
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => handleVideoSearch(e.target.value)}
            className="flex-1 relative dark:focus:border-blue-500 dark:text-white dark:placeholder:text-gray-400  dark:border-gray-800 sm:text-sm xs:h-9 dark:bg-black h-10   focus:border-blue-600 border-[1px]	 outline-none border-gray-300 px-6  rounded-full rounded-r-none"
            type="text"
            placeholder="Search"
            onBlur={() => showSuggetions(false)} // Hide suggestions when input loses focus
            onFocus={() => showSuggetions(true)} // Show suggestions when input is focused
          />
          {query !== "" && (
            <button
              className={`w-10 h-10 flex justify-center xs:h-9 items-center absolute hover:bg-gray-200 rounded-full right-20 xs:right-5 top-0 dark:hover:bg-[--primaryGrayDark] `}
            >
              <img
                className="w-8 h-8 sm:h-6 sm:w-6"
                onClick={() => dispatch(searchQuery(""))}
                src={themeMode === "dark" ? clearIconDark : clearIcon}
                alt=""
              />
            </button>
          )}

          <button
            type="Search"
            className="p-2 xs:h-9 flex-none xs:hidden dark:bg-[#222222]  px-6 xs:px-2 border-gray-300 bg-gray-100"
          >
            <img
              className="w-5"
              src={themeMode === "dark" ? searchIconDark : searchIcon}
              alt="search"
            />
          </button>
        </div>
        {isShowSuggestions && <VideoSearchSuggestions />}{" "}
        {/* Render suggestions if showSuggestions is true */}
      </div>

      <div className="bg-gray-200 dark:bg-[#222222] flex-none xs:h-9 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
        <img
          className=" xs:h-5"
          src={themeMode === "light" ? micIcon : micIconDark}
          alt="mic"
        />
      </div>
    </form>
  );
}

export default SearchBar;
