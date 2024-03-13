import React from "react";

function SidebarButton({ icon, text }) {
  return (
    <div className="flex flex-row dark:text-white  justify-start first:bg-gray-200 items-center gap-6 hover:bg-gray-200 dark:first:bg-[#272727] dark:hover:bg-[#272727] cursor-pointer rounded-xl p-2">
      <img className="w-6 " src={icon} alt="" />
      <span className="font-semibold dark:text-white text-sm">{text}</span>
    </div>
  );
}

export default SidebarButton;
