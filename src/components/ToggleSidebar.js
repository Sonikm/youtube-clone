import React from "react";
import hambugerIcon from "../assets/hamburger-icon.svg";
import hambugerIconDark from "../assets/hamburger-icon-dark.svg";
import useTheme from "../contexts/ThemeContext";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

function ToggleSidebar() {
  const { themeMode } = useTheme();

  const dispatch = useDispatch();

  function handleToggleSidebar() {
    dispatch(toggleSidebar());
  }

  return (
    <div className="hover:bg-gray-300 dark:hover:bg-[#272727]  ease-out duration-100 rounded-full p-2 cursor-pointer">
      <img
        onClick={handleToggleSidebar}
        src={themeMode === "dark" ? hambugerIconDark : hambugerIcon}
        alt="icon"
      />
    </div>
  );
}

export default ToggleSidebar;
