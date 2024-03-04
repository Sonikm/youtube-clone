import React from "react";
import searchIcon from "../assets/search-icon.svg";

function AutoSuggestionsList({ suggest }) {
  return (
    <li className="font-semibold cursor-pointer hover:bg-slate-100 p-1">
      <div className="flex justify-start items-center">
        <img src={searchIcon} className="w-5 mr-2" alt="" />
        <span>{suggest}</span>
      </div>
    </li>
  );
}

export default AutoSuggestionsList;
