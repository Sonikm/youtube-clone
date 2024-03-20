import React from "react";
import searchIcon from "../assets/search-icon.svg";
import searchIconDark from "../assets/search-icon-dark.svg";
import useTheme from "../contexts/ThemeContext";
import { useDispatch } from "react-redux";
import { showSuggetions } from "../utils/appSlice";
import { searchQuery } from "../utils/searchSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

function Suggestion({ suggestion }) {
  const { themeMode } = useTheme();
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSuggestions(suggestion) {
  // Dispatch actions to update Redux store
  dispatch(showSuggetions(false)); // Hide suggestions
  dispatch(searchQuery(suggestion)); // Update search query in store
   // Get current path
   const currentPath = window.location.pathname;

   // If current path doesn't start with "/result", navigate to "/result"
   // and set search query in search params
   if (!currentPath.startsWith("/result")) {
     navigate(`/result`);
     setSearchParams({ query: suggestion });
   } else {
     // If current path starts with "/result", only set search query in search params
     setSearchParams({ query: suggestion });
   }
 }

  return (
    <li
      onClick={() => handleSuggestions(suggestion)}
      className="flex items-center gap-2 font-semibold hover:bg-gray-200 dark:hover:bg-[#333333] dark:text-white cursor-pointer p-2 rounded-lg"
    >
      <img
        className="w-4"
        src={themeMode === "dark" ? searchIconDark : searchIcon}
        alt=""
      />
      <p>{suggestion}</p>
    </li>
  );
}

export default Suggestion;
