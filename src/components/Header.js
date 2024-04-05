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
import user from '../assets/user.jpg';


function Header() {
  const { themeMode } = useTheme();
  const [isSearch, setIsSearch] = useState(false);

  function handleSearch(isShowSearchbar){
    setIsSearch(isShowSearchbar);
  }

  const path = window.location.pathname;
  console.log(path)
  return (
    <div className="flex flex-col sm:px-3  p-2  px-6 fixed top-0 left-0 bg-white dark:bg-black  w-full ">
      <div className="flex gap-5 xs:gap-3 items-center justify-between dark:bg-black ">
        <div className={`${isSearch ? "md:hidden " : ""} flex gap-6 sm:gap-4 dark:gap-2 flex-nowrap items-center col-span-1 `}>
          <ToggleSidebar />
          <Logo />
        </div>
       
        <SearchBar onHandleSearchbar={handleSearch} isSearch={isSearch} />
        <div className="flex col-span-1 gap-4 xs:gap-3 p-2 items-center ">
        <img onClick={()=> handleSearch(true)}
             className={`${isSearch ? "opacity-0 " : "md:opacity-100 "} w-6 xs:w-5 opacity-0  cursor-pointer`}
              src={themeMode === "dark" ? searchIconDark : searchIcon}
              alt="search"
            />
          <img
            className={`${isSearch ? " md:hidden " : " "} w-6 cursor-pointer xs:w-5`}
            src={themeMode === "dark" ? liveIconDark : liveIcon}
            alt=""
          />
          <img
            className={ ` ${isSearch ? " md:hidden  " : " "} w-6   cursor-pointer xs:w-5`}
            src={themeMode === "dark" ? notificationDark : notification}
            alt=""
          />

          <ToggleTheme isSearch={isSearch} />
          <img className={` ${isSearch ? " md:hidden  " : " "} rounded-full w-8 xs:w-6 `} src={user} alt=""/>
        </div>
      </div>
      {path === '/' ? (
        <div className=" ml-10  sm:ml-0 sm:px-2 sm:gap-2  px-10 py-4 flex gap-4 overflow-x-scroll no-scrollbar  ">
          <ButtonList />
        </div>
      ) : null}
    </div>
  );
}

export default Header;
