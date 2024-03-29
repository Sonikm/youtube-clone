import React from "react";
import CommentsBox from "./CommentsBox";
import VideoDescription from "./VideoDescription";
import usePlayVideoData from "../hooks/usePlayVideoData";
import VideoTitle from "./VideoTitle";
import VideoTabs from "./VideoTabs";
import useVideoAdditionalData from "../hooks/useVideoAdditionalData";

function VideoCardData({ videoId, channelId, videoPlayData }) {
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
    <div className="flex flex-col gap-4 py-4 dark:text-white w-[745px]">
      <VideoTitle title={title} />
      <VideoTabs
        videoUserProfilePhoto={videoUserProfilePhoto}
        channelTitle={channelTitle}
        likeCount={likeCount}
        subscriberCount={subscriberCount}
      />
      <VideoDescription
        viewCount={viewCount}
        publishedAt={publishedAt}
        description={description}
        localized={localized}
      />
      <CommentsBox commentCount={commentCount} videoId={videoId} />
    </div>
  );
}

export default VideoCardData;
