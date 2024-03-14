import React from "react";

function SidebarIcon({ icon, text }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 cursor-pointer dark:hover:bg-[--primaryGrayDark] p-2 px-5 rounded-lg hover:bg-gray-200">
      <img className="w-6 " src={icon} alt="" />
      <span className="font-semibold dark:text-white text-[10px]">{text}</span>
    </div>
  );
}

export default SidebarIcon;
