import React, { useState } from "react";
import CommentsBox from "./CommentsBox";
import VideoDescription from "./VideoDescription";
import VideoTitle from "./VideoTitle";
import VideoTabs from "./VideoTabs";
import useVideoAdditionalData from "../hooks/useVideoAdditionalData";

function VideoCardData({ videoId, channelId, videoPlayData }) {
  const [isShowComments, setIsShowComments] = useState(false);

  const {
    videoLikeViewsAndCommentsData,
    videoUserProfilePhoto,
    subscribeCount,
  } = useVideoAdditionalData(videoId, channelId);
  if (
    !videoPlayData ||
    !videoLikeViewsAndCommentsData ||
    !videoUserProfilePhoto ||
    !subscribeCount
  )
    return;

  const {
    channelTitle,
    description,
    localized,
    publishedAt,
    tags,
    thembnails,
    title,
  } = videoPlayData?.snippet;

  const { subscriberCount } = subscribeCount;

  const { commentCount, likeCount, viewCount } = videoLikeViewsAndCommentsData;

  return (
    <div className="flex flex-col gap-4 py-4 dark:text-white  lg:w-full md:w-[600px] w-[720px]  sm:w-[400px]  xs:w-[300px] ">
      <VideoTitle title={title} />
      <VideoTabs
        videoUserProfilePhoto={videoUserProfilePhoto}
        channelTitle={channelTitle}
        likeCount={likeCount}
        subscriberCount={subscriberCount}
      />
      <VideoDescription
        setIsShowComments={setIsShowComments}
        isShowComments={isShowComments}
        viewCount={viewCount}
        publishedAt={publishedAt}
        description={description}
        localized={localized}
      />
        <CommentsBox isShowComments={isShowComments} commentCount={commentCount} videoId={videoId} />
    </div>
  );
}

export default VideoCardData;
