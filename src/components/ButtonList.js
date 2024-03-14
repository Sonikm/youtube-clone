import React from "react";
import Button from "./Button";
// import rightArrow from "../assets/right-arrow.svg";

function ButtonList() {
  const buttonList = [
    "All",
    "Music",
    "Programming",
    "Dance",
    "Comedy",
    "Coding",
    "Mixes",
    "Live",
    "Computer",
    "Sales",
    "Recently uploaded",
    "React",
    "Movies",
    "Story",
    "Blogs",
    "Weddings",
  ];

  return (
    <div className=" ml-10 px-10 py-4 flex gap-4 overflow-x-scroll no-scrollbar  ">
      {buttonList.map((btn, index) => (
        <Button text={btn} key={index} />
      ))}
    </div>
  );
}

export default ButtonList;
