import React from 'react';
import { formatPublishedVideo, formatViews } from '../utils/helper';
import useGetVideoViewsAndLikeCountData from '../hooks/useVideoAdditionalData';

function VideoCard({videoInfo, videoId}) {
  const {title, thumbnails, channelTitle, publishedAt, channelId} = videoInfo;
 const { videoLikeViewsAndCommentsData, videoUserProfilePhoto} = useGetVideoViewsAndLikeCountData(videoId, channelId);
 if(!videoLikeViewsAndCommentsData ) return;

 const {commentCount, favoriteCount, likeCount, viewCount} = videoLikeViewsAndCommentsData;

  return (
    <div className='flex flex-col justify-start gap-4  w-[320px]'>
      <img className='rounded-xl ' src={thumbnails?.medium?.url} alt=''/>
      <div className='flex gap-2'>
       {/* <UserAvatar/> */}
       <img className="w-6 h-6 cursor-pointer rounded-full" src={videoUserProfilePhoto} alt=''/>
       <div className='flex gap-2 flex-col justify-start text-wrap font-semibold pr-4 '>
        <p className='line-clamp-3 dark:text-white'>{title}</p>
        <div className='text-sm text-gray-500 dark:text-[#b3b2b2]'>
        <p>{channelTitle}</p>
        <p>{formatViews(viewCount)} views . {formatPublishedVideo(publishedAt)}</p>
        </div>
      
       </div>
      </div>
    </div>
  )
}

export default VideoCard