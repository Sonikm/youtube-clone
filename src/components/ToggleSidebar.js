import React from "react";
import hambugerIcon from "../assets/hamburger-icon.svg";

function ToggleSidebar() {
  return (
    <div className="hover:bg-gray-300 ease-out duration-100 rounded-full p-2 cursor-pointer">
      <img
        className="w-7 "
        src={hambugerIcon}
        alt="icon"
      />
    </div>
  );
}

export default ToggleSidebar;
