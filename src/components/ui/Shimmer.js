import React from "react";

function Shimmer() {
  return (
    <div className="flex flex-wrap gap-10 sm:justify-center ">
      {Array.from(Array(20), (_, index) => (
        <ShimmerBox key={index} />
      ))}
    </div>
  );
}

export default Shimmer;

function ShimmerBox() {
  return (
    <div className="flex flex-col gap-4">
      <div className="  bg-gray-300 dark:bg-[--primaryGrayDark] rounded-md  w-[400px] h-[240px] md:w-[350px] md:h-[200px] sm:w-[260px] sm:h-[150px]"></div>
      <div className="flex justify-between">
        <div className="w-[60px] xs:w-[40px] xs:h-[40px] h-[60px] sm:w-[40px] sm:h-[40px] bg-gray-300 dark:bg-[--primaryGrayDark] rounded-full"></div>
        <div className="flex gap-2  flex-col">
          <div className="w-[320px] rounded-sm  md:w-[260px] sm:w-[180px] sm:h-[15px] bg-gray-300 dark:bg-[--primaryGrayDark] h-7 xs:h-6 "></div>
          <div className="w-[260px] rounded-sm md:w-[200px] sm:w-[150px] sm:h-[15px]   bg-gray-300 dark:bg-[--primaryGrayDark] h-7 xs:h-6 "></div>
        </div>
      </div>
    </div>
  );
}
