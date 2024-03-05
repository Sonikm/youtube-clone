import React from "react";
import AutoSuggestionsList from "./AutoSuggestionsList";
import { useSelector } from "react-redux";

function AutoSuggestions({ searchVideo }) {
  const isShowSuggestions = useSelector((store) => store.app.isShowSuggestions);

  if (searchVideo === "[]" || searchVideo.length === 0 || !isShowSuggestions) return null;

  return (
    <ul className="p-4 border flex flex-col absolute bg-white w-11/12 m-2 rounded-xl shadow-lg ">
      {searchVideo?.map((suggest, index) => (
        <AutoSuggestionsList suggest={suggest} key={index} />
      ))}
    </ul>
  );
}

export default AutoSuggestions;
