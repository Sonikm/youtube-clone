import React from "react";
import homeIcon from "../assets/home.svg";
import homeIconDark from "../assets/home-dark.svg";
import shortsIconDark from "../assets/shorts-dark.svg";
import shortsIcon from "../assets/shorts.svg";
import yourProfileIconDark from "../assets/your-profile-dark.svg";
import yourProfileIcon from "../assets/your-profile.svg";
import subscriptionsDark from "../assets/subscriptions-dark.svg";
import subscriptions from "../assets/subscriptions.svg";
import SidebarIcon from "./SidebarIcon";
import useTheme from "../contexts/ThemeContext";


function CloseSidebar() {

    const {themeMode} = useTheme();

  return (
    <div className="flex flex-col gap-4 items-center fixed  top-14 bg-white dark:bg-black h-full w-20 pr-6  ">
      <SidebarIcon icon={themeMode === 'dark' ? homeIconDark : homeIcon} text={"Home"} />
      <SidebarIcon icon={ themeMode === 'dark' ? shortsIconDark : shortsIcon} text={"Shorts"} />
      <SidebarIcon icon={themeMode === 'dark' ? subscriptionsDark : subscriptions} text={"Subscriptions"} />
      <SidebarIcon icon={themeMode === 'dark' ? yourProfileIconDark : yourProfileIcon} text={"You"} />
    </div>
  );
}

export default CloseSidebar;
