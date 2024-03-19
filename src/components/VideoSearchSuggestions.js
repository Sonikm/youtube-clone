import React, { useState } from "react";
import Suggestion from "./Suggestion";
import useVideoSuggestions from "../hooks/useVideoSuggestions";
import useSearchVideoList from "../hooks/useSearchVideoList";

function VideoSearchSuggestions() {
  const [searchVideo, setSearchVideo] = useState("");
  const { suggestions } = useVideoSuggestions();
  useSearchVideoList(searchVideo);

  if (!suggestions.length) return;

  return (
    <ul className=" flex flex-col w-[500px] dark:bg-[#222222] dark:border-none  mx-3 my-1 bg-white border-[1px]   shadow-md z-40 rounded-3xl absolute top-10 py-4 px-3 ">
      {suggestions.map((item, index) => (
        <Suggestion  suggestion={item} key={index}/>
      ))}
    </ul>
  );
}

export default VideoSearchSuggestions;
