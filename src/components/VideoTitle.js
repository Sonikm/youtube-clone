import React from 'react'

function VideoTitle({title}) {
  return  <h2 className="font-bold dark:text-white text-xl line-clamp-2">
  {title}
 </h2>;
}

export default VideoTitle