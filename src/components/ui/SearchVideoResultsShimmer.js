import React from 'react'

function SearchVideoResultsShimmer() {
    return (
        <div className="flex gap-4 flex-col m-4">
          {Array.from(Array(10), (_, index) => (
            <Box key={index} />
          ))}
        </div>
      );
}

export default SearchVideoResultsShimmer

function Box() {
    return (
      <div className="flex justify-between gap-6 ">
        <div className="w-[380px] md:w-[280px] md:h-[200px] sm:w-[220px] sm:h-[150px] h-[220px] rounded-md bg-gray-300 dark:bg-[--primaryGrayDark]"></div>
        <div className="flex flex-col gap-4">
          <div className="w-[250px] h-[20px] sm:w-[150px]  rounded-md bg-gray-300 dark:bg-[--primaryGrayDark]"></div>
          <div className="w-[200px] h-[20px] sm:w-[100px] rounded-md bg-gray-300 dark:bg-[--primaryGrayDark]"></div>
        </div>
      </div>
    );
  }