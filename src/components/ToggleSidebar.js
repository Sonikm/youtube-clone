import React from "react";
import hambugerIcon from "../assets/hamburger-icon.svg";
import hambugerIconDark from "../assets/hamburger-icon-dark.svg";
import useTheme from "../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

function ToggleSidebar() {
  const { themeMode } = useTheme();

  const dispatch = useDispatch();
  const isOpenSidebar = useSelector(store => store.app.isOpenSidebar);

  function handleToggleSidebar(){
    dispatch(toggleSidebar());
    console.log(isOpenSidebar);
  }

  return (
    <div className="hover:bg-gray-300  ease-out duration-100 rounded-full p-2 cursor-pointer">
      <img onClick={handleToggleSidebar} src={themeMode ==='dark' ? hambugerIconDark : hambugerIcon} alt="icon" />
    </div>
  );
}

export default ToggleSidebar;
