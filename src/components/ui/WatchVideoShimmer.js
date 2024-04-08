import React from 'react'

function WatchVideoShimmer() {
  return (
    <div className=" max-w-[800px] flex flex-col  lg:w-full pr-10 gap-10">
        <div className="flex justify-center bg-gray-300 dark:bg-[--primaryGrayDark]  flex-1 overflow-hidden mr-10 md:w-[600px] w-[760px] sm:w-[400px] sm:h-[250px] lg:w-[650px] xs:w-[300px] xs:h-[150px] h-[400px] md:h-[350px]">
       
        </div>
        <div className="flex justify-between gap-8">
        <div className="w-[60px] xs:w-[40px] xs:h-[40px] h-[60px] sm:w-[40px] sm:h-[40px] bg-gray-300 dark:bg-[--primaryGrayDark] rounded-full"></div>
        <div className="flex gap-2  flex-col">
          <div className="bg-gray-300 dark:bg-[--primaryGrayDark]  flex-1 overflow-hidden mr-10 md:w-[500px] w-[600px] sm:w-[300px] sm:h-[20px] lg:w-[600px] xs:w-[220px] xs:h-[100px] h-[70px] md:h-[60px]"></div>
          <div className="bg-gray-300 dark:bg-[--primaryGrayDark]  flex-1 overflow-hidden mr-10 md:w-[500px] w-[600px] sm:w-[300px] sm:h-[20px] lg:w-[600px] xs:w-[220px] xs:h-[100px] h-[70px] md:h-[60px] "></div>
        </div>
      </div>
    </div>
  )
}

export default WatchVideoShimmer