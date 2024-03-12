import React from "react";
import ToggleSidebar from "./ToggleSidebar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";
import liveIcon from "../assets/live.svg";
import notification from "../assets/notification.svg";

function Header() {
  return (
    <div className="bg-white p-2 px-4 grid grid-flow-col gap-5 items-center justify-between">
      <div className="flex gap-6 flex-nowrap items-center col-span-1">
        <ToggleSidebar />
        <Logo />
      </div>

      <SearchBar />
      <div className="flex col-span-1 gap-4 p-2">
        <img className="w-6 cursor-pointer " src={liveIcon} alt="" />
        <img className="w-6  cursor-pointer" src={notification} alt="" />

        <UserAvatar />
      </div>
    </div>
  );
}

export default Header;
