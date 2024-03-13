import React from "react";
import ToggleSidebar from "./ToggleSidebar";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import SidebarButtonList from "./SidebarButtonList";

function OpenSidebar() {
  const isOpenSidebar = useSelector((store) => store.app.isOpenSidebar);

  return (
    <>
      <div
        className={` ${
          isOpenSidebar ? "translate-x-0 " : "translate-x-full"
        } h-full w-64 bg-white dark:bg-black fixed left-0 top-0 z-40  ease-in-out duration-300 `}
      >
        <div className="flex gap-6 px-6 p-2 dark:gap-2 flex-nowrap items-center col-span-1">
          <ToggleSidebar />
          <Logo />
        </div>

        <SidebarButtonList />
      </div>
      <div
        className={` ${
          isOpenSidebar ? "translate-x-0 " : "translate-x-full"
        } ease-in-out duration-300  fixed w-full h-screen bg-black opacity-40 top-0 left-0 z-20`}
      ></div>
    </>
  );
}

export default OpenSidebar;
