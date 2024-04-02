import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { categoryVideos } from "../utils/categorySlice";
import useVideoCategories from "../hooks/useVideoCategories";
// import rightArrow from "../assets/right-arrow.svg";

function ButtonList() {
  const dispatch = useDispatch();

  const { videoCategories } = useVideoCategories();

  if (!videoCategories) return;

  function handleVideoCategory(category) {
    dispatch(categoryVideos(category));
  }

  return (
    <div className=" ml-10 px-10 py-4 flex gap-4 overflow-x-scroll no-scrollbar  ">
      <Button key={0} text={"All"} onClick={() => handleVideoCategory('All')} />
      {videoCategories?.map((btn) => (
        <Button text={btn?.snippet?.title} key={btn?.snippet?.channelId} onClick={() => handleVideoCategory(btn?.snippet?.title)} />
      ))}
    </div>
  );
}

export default ButtonList;
