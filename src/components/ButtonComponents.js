import React from "react";
import Button from "./Button";

function ButtonComponents() {
  const list = [
    "All",
    "Music",
    "Flutter",
    "Game",
    "Song",
    "Dance",
    "Paintings",
  ];

  return (
    <div className="p-4 flex gap-3">
      {list.map((item, index) => (
        <Button text={item} key={index} />
      ))}
    </div>
  );
}

export default ButtonComponents;
