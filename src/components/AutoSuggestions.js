import React from "react";
import AutoSuggestionsList from "./AutoSuggestionsList";

function AutoSuggestions({ searchVideo }) {
  if (searchVideo == [] || searchVideo.length == 0) return null;



  return (
    <ul className="p-4 border flex flex-col absolute bg-white w-11/12 m-2 rounded-xl shadow-lg ">
      {searchVideo?.map((suggest) => (
        <AutoSuggestionsList suggest={suggest} />
      ))}
    </ul>
  );
}

export default AutoSuggestions;
