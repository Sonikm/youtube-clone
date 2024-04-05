import React from "react";
import youtubeLogo from "../assets/youtube-logo.svg";
import youtubeLogoDark from "../assets/logo-dark.svg";
import useTheme from "../contexts/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../utils/searchSlice";
import { toggleElements } from "../utils/appSlice";

function Logo() {
  const { themeMode } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isVisibleButtonList = useSelector((store) => store.app.isVisible);
  console.log(isVisibleButtonList);

  function handleToggle() {
    dispatch(searchQuery(""));
    dispatch(toggleElements(true));
    navigate('/')
  }

  return (
    // <Link to={"/"} onClick={toggleElements(true)}>
      <img
        onClick={() => handleToggle()}
        className="w-24 dark:w-32  cursor-pointer"
        src={themeMode === "dark" ? youtubeLogoDark : youtubeLogo}
        alt="logo"
      />
    // </Link>
  );
}

export default Logo;
