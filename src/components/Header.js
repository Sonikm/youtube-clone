import React, { useEffect, useState } from "react";
import ToggleSidebar from "./ToggleSidebar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import liveIcon from "../assets/live.svg";
import liveIconDark from "../assets/live-dark.svg";
import notification from "../assets/notification.svg";
import notificationDark from "../assets/notification-dark.svg";
import ToggleTheme from "./ToggleTheme";
import useTheme from "../contexts/ThemeContext";
import ButtonList from "./ButtonList";
import searchIcon from "../assets/search-icon.svg";
import searchIconDark from "../assets/search-icon-dark.svg";
import user from "../assets/user.jpg";
import Settings from "./Settings";
import { useDispatch, useSelector } from "react-redux";
import { toggleSettings } from "../utils/appSlice";

function Header() {
  const { themeMode } = useTheme();
  const [isSearch, setIsSearch] = useState(false);
  const isShowSettings = useSelector((store) => store.app.isShowSettings);
  const dispatch = useDispatch();

  function handleUserSettings() {
    dispatch(toggleSettings());
  }

  function handleSearch(isShowSearchbar) {
    setIsSearch(isShowSearchbar);
  }

  const path = window.location.pathname;
  console.log(path);
  return (
    <div className="flex flex-col sm:px-3  p-2 z-30  px-6 fixed top-0 left-0 bg-white dark:bg-black  w-full ">
      <div className="flex gap-5 xs:gap-3 items-center justify-between dark:bg-black ">
        <div
          className={`${
            isSearch ? "md:hidden " : ""
          } flex gap-6 sm:gap-4 dark:gap-2 flex-nowrap items-center col-span-1 `}
        >
          <ToggleSidebar />
          <Logo />
        </div>

        <SearchBar onHandleSearchbar={handleSearch} isSearch={isSearch} />
        <div className="flex col-span-1 gap-4 xs:gap-3 p-2 items-center relative ">
          <img
            onClick={() => handleSearch(true)}
            className={`${
              isSearch ? "opacity-0 " : "md:opacity-100 "
            } w-6 xs:w-5 opacity-0  cursor-pointer`}
            src={themeMode === "dark" ? searchIconDark : searchIcon}
            alt="search"
          />
          <img
            className={`${
              isSearch ? " md:hidden " : " "
            } w-6 cursor-pointer xs:w-5`}
            src={themeMode === "dark" ? liveIconDark : liveIcon}
            alt=""
          />
          <img
            className={` ${
              isSearch ? " md:hidden  " : " "
            } w-6   cursor-pointer xs:w-5`}
            src={themeMode === "dark" ? notificationDark : notification}
            alt=""
          />

          <ToggleTheme isSearch={isSearch} />
          <img
            onClick={() => handleUserSettings()}
            className={` ${
              isSearch ? " md:hidden  " : " "
            } rounded-full w-8 xs:w-6 z-[90] `}
            src={user}
            alt=""
          />

          {isShowSettings && <Settings />}
        </div>
        {isShowSettings && (
          <div
            onClick={() => handleUserSettings()}
            className="absolute w-full h-screen bg-white opacity-0 "
          ></div>
        )}
      </div>

      {path === "/youtube-clone" ? (
        <div className=" ml-10  md:ml-0 md:px-0 sm:gap-2  px-10 py-4 flex gap-4 overflow-x-scroll no-scrollbar  ">
          <ButtonList />
        </div>
      ) : null}
    </div>
  );
}

export default Header;
