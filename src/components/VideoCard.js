import React from 'react';
import { formatPublishedVideo, formatViews } from '../utils/helper';
import useGetVideoViewsAndLikeCountData from '../hooks/useVideoAdditionalData';

function VideoCard({videoInfo, videoId}) {
  const {title, thumbnails, channelTitle, publishedAt, channelId} = videoInfo;
 const { videoLikeViewsAndCommentsData, videoUserProfilePhoto} = useGetVideoViewsAndLikeCountData(videoId, channelId);
 if(!videoLikeViewsAndCommentsData ) return;

 const { viewCount} = videoLikeViewsAndCommentsData;

  return (
    <div className='flex flex-col  overflow-hidden justify-start gap-4  max-w-[400px] flex-1'>
      <img className='rounded-xl hover:rounded-none hover:scale-[1.02]  z-10 ease-out duration-300 ' src={thumbnails?.maxres?.url || thumbnails?.medium?.url} alt=''/>
      <div className='flex gap-2 sm:text-sm'>
       {/* <UserAvatar/> */}
       <img className="w-8 sm:w-6 h-8 sm:h-6 cursor-pointer rounded-full" src={videoUserProfilePhoto} alt=''/>
       <div className='flex gap-2 flex-col justify-start text-wrap font-semibold pr-4 sm:pr-1 '>
        <p className='line-clamp-3 dark:text-white'>{title}</p>
        <div className='text-sm text-gray-500 dark:text-[#b3b2b2]'>
        <p className='text-wrap'>{channelTitle}</p>
        <p>{formatViews(viewCount)} views . {formatPublishedVideo(publishedAt)}</p>
        </div>
      
       </div>
      </div>
    </div>
  )
}

export default VideoCard
//xl:w-[300px] md:w-[300px]  w-[400px] sm:w-[250px] xs:w-[350px] 2xs:w-[200px]