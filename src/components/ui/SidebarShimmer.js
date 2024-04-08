import React from "react";

function SidebarShimmer() {
  return (
    <div className="flex gap-3 flex-col m-4">
      {Array.from(Array(10), (_, index) => (
        <Box key={index} />
      ))}
    </div>
  );
}

export default SidebarShimmer;

function Box() {
  return (
    <div className="flex justify-between gap-3 ">
      <div className="w-[180px] h-[100px] bg-gray-300 dark:bg-[--primaryGrayDark]"></div>
      <div className="flex flex-col gap-4">
        <div className="w-[120px] h-[20px] bg-gray-300 dark:bg-[--primaryGrayDark]"></div>
        <div className="w-[100px] h-[20px] bg-gray-300 dark:bg-[--primaryGrayDark]"></div>
      </div>
    </div>
  );
}
