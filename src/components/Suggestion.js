import React from "react";
import searchIcon from "../assets/search-icon.svg";
import searchIconDark from "../assets/search-icon-dark.svg";
import useTheme from "../contexts/ThemeContext";
import { useDispatch } from "react-redux";
import { showSuggetions } from "../utils/appSlice";
import { searchQuery } from "../utils/searchSlice";

function Suggestion({ suggestion }) {
  const { themeMode } = useTheme();
  const dispatch = useDispatch();

  function handleSuggestions(suggestion) {
    dispatch(showSuggetions(false));
    dispatch(searchQuery(suggestion));
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
