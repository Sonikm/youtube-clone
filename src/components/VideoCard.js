import React from 'react';
import UserAvatar from './UserAvatar';

function VideoCard({videoInfo}) {
  const {title, thumbnails, channelTitle} = videoInfo;
  return (
    <div className='flex flex-col justify-start gap-4  w-[320px]'>
      <img className='rounded-xl ' src={thumbnails?.medium?.url} alt=''/>
      <div className='flex gap-2'>
       <UserAvatar/>
       <div className='flex gap-2 flex-col justify-start text-wrap font-semibold pr-4 '>
        <p className='line-clamp-3 dark:text-white'>{title}</p>
        <div className='text-sm text-gray-500 dark:text-[#b3b2b2]'>
        <p>{channelTitle}</p>
        <p>446K views . 2 weeks ago</p>
        </div>
      
       </div>
      </div>
    </div>
  )
}

export default VideoCard