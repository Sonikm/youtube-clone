import React, { useState } from "react";
import {
  formatNumberWithComma,
  formatPublishedVideo,
  formatText,
} from "../utils/helper";

function VideoDescription({ description, publishedAt, viewCount }) {
  const [isExpandDescipton, setIsExpandDescription] = useState(false);

  // Render formatted description
  const renderDescription = () => {
    return formatText(description);
  };

  return (
    <div
      className={`text-sm bg-gray-200 dark:bg-[#222222] rounded-xl p-4 ${
        isExpandDescipton ? "" : "h-[130px] overflow-hidden"
      }`}
    >
      <p>
        {formatNumberWithComma(viewCount)} {formatPublishedVideo(publishedAt)}
      </p>
      <div className="flex items-end justify-between">
        <p className={`${isExpandDescipton ? "" : "line-clamp-4"}`}>
          {renderDescription()}
        </p>
        <p
          onClick={() => setIsExpandDescription(!isExpandDescipton)}
          className="font-bold cursor-pointer whitespace-nowrap"
        >
          {isExpandDescipton ? "Show less" : "more"}
        </p>
      </div>
    </div>
  );
}

export default VideoDescription;
