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

function SearchBar() {
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
    if (!currentPath.startsWith("/result")) {
      navigate("/result");
    }
    // Set search params and hide suggestions when the form is submitted
    setSearchParams({ query: query });
    toggleSuggestions(false);
  }

  // Function to check if the input is focused
  const isInputFocused = () => {
    return document.activeElement === inputRef.current;
  };

  return (
    <form
      ref={formRef}
      className="flex col-span-3 gap-4 relative "
      onSubmit={handleSubmitForm}
      onFocus={() => toggleSuggestions(true)}
    >
      <div className="flex flex-col ">
        <div className="border border-gray-300 w-[560px]   dark:border-gray-800  flex-1 flex rounded-3xl overflow-hidden ">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => handleVideoSearch(e.target.value)}
            className="flex-1  dark:focus:border-blue-500 dark:text-white dark:placeholder:text-gray-400  dark:border-gray-800  dark:bg-black  focus:border-blue-600 border-[1px] 	 outline-none border-gray-300 px-6  rounded-full rounded-r-none"
            type="text"
            placeholder="Search"
            onBlur={() => showSuggetions(false)} // Hide suggestions when input loses focus
            onFocus={() => showSuggetions(true)} // Show suggestions when input is focused
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
        {isShowSuggestions && <VideoSearchSuggestions />} {/* Render suggestions if showSuggestions is true */}
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
