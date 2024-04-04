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

  return  <>
  <Button key={0} text={"All"} onClick={() => handleVideoCategory("All")} />
  {videoCategories?.map((btn, index) => (
    <Button
      text={btn?.snippet?.title}
      key={index}
      onClick={() => handleVideoCategory(btn?.snippet?.title)}
    />
  ))}
</>
   
  
}

export default ButtonList;
