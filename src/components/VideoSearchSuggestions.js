import React from "react";
import Suggestion from "./Suggestion";
import useVideoSuggestions from "../hooks/useVideoSuggestions";
import useSearchVideoList from "../hooks/useSearchVideoList";
import { Link } from "react-router-dom";

function VideoSearchSuggestions() {
  const { suggestions } = useVideoSuggestions();
  useSearchVideoList();

  if (!suggestions.length) return;

  return (
    <ul className=" flex flex-col w-[500px] max-w-[500px] lg:w-[400px]  sm:w-[300px]  xs:w-[250px] dark:bg-[#222222] dark:border-none  mx-3 my-1 bg-white border-[1px]   shadow-md z-40 rounded-3xl absolute top-10 py-4 px-3 ">
      {suggestions.map((item, index) => (
        // <Link to={`results?search_query${item}`}>
        <Suggestion  suggestion={item} key={index}/>
      //  </Link>
      ))}
    </ul>
  );
}

export default VideoSearchSuggestions;
