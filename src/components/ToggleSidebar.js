import React from "react";
import hambugerIcon from "../assets/hamburger-icon.svg";
import hambugerIconDark from "../assets/hamburger-icon-dark.svg";
import useTheme from "../contexts/ThemeContext";

function ToggleSidebar() {
  const { themeMode } = useTheme();
  return (
    <div className="hover:bg-gray-300  ease-out duration-100 rounded-full p-2 cursor-pointer">
      <img src={themeMode ==='dark' ? hambugerIconDark : hambugerIcon} alt="icon" />
    </div>
  );
}

export default ToggleSidebar;
