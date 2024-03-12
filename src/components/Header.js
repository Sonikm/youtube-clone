import React from "react";
import ToggleSidebar from "./ToggleSidebar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";
import liveIcon from "../assets/live.svg";
import liveIconDark from "../assets/live-dark.svg";
import notification from "../assets/notification.svg";
import notificationDark from "../assets/notification-dark.svg";
import ToggleTheme from "./ToggleTheme";
import useTheme from "../contexts/ThemeContext";

function Header() {
  const { themeMode } = useTheme();
  return (
    <div className=" p-2 heme-transition  px-6 grid grid-flow-col gap-5 items-center justify-between dark:bg-black ">
      <div className="flex gap-6 dark:gap-2 flex-nowrap items-center col-span-1">
        <ToggleSidebar />
        <Logo />
      </div>

      <SearchBar />
      <div className="flex col-span-1 gap-4 p-2 items-center ">
        <img
          className="w-6 cursor-pointer "
          src={themeMode === "dark" ? liveIconDark : liveIcon}
          alt=""
        />
        <img
          className="w-6  cursor-pointer"
          src={themeMode === "dark" ? notificationDark : notification}
          alt=""
        />

        <UserAvatar />
        <ToggleTheme />
      </div>
    </div>
  );
}

export default Header;
