import React from "react";
import youtubeLogo from "../assets/youtube-logo.svg";
import youtubeLogoDark from "../assets/logo-dark.svg";
import useTheme from "../contexts/ThemeContext";

function Logo() {
  const { themeMode } = useTheme();
  return (
    <img
      className="w-24 dark:w-32  cursor-pointer"
      src={themeMode === "dark" ? youtubeLogoDark : youtubeLogo}
      alt="logo"
    />
  );
}

export default Logo;
