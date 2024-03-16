import React from "react";
import youtubeLogo from "../assets/youtube-logo.svg";
import youtubeLogoDark from "../assets/logo-dark.svg";
import useTheme from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar} from "../utils/appSlice";

function Logo() {
  const { themeMode } = useTheme();
  const dispatch = useDispatch();
  return (
    <Link to="/">
     <img
      className="w-24 dark:w-32  cursor-pointer"
      src={themeMode === "dark" ? youtubeLogoDark : youtubeLogo}
      alt="logo"
    /></Link>
   
  );
}

export default Logo;
