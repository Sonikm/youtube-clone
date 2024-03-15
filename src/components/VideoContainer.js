import React from 'react'
import VideoCard from './VideoCard'
import useYtVideoList from '../hooks/useYtVideoList'

function VideoContainer() {

 const {videoList} = useYtVideoList();

 if(!videoList?.length || videoList === null) return;


  return (
    <div className='mt-[120px] ml-[100px] flex flex-wrap justify-evenly gap-y-10 gap-x-4'>
      {
        videoList.map((video) => <VideoCard videoInfo={video?.snippet} key={video?.id}/>)
      }
    </div>
  )
}

export default VideoContainer