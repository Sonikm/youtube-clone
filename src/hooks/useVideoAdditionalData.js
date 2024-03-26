import { useEffect, useState } from "react";
import { VIDEO_VIEWS_LIKE_COMMENTS_DATA, VIDEO_USER_PROFILE_PHOTO } from "../utils/constent";
import { fetchData } from "../utils/helper";

export default function useVideoAdditionalData(videoId, channelId) {
    const [videoLikeViewsAndCommentsData, setVideoLikeViewsAndCommentsData] = useState(null);
    const [videoUserProfilePhoto, setVideoUserProfilePhoto] = useState(null);

  useEffect(() => {
    async function getData() {
      const data1 = await fetchData(VIDEO_VIEWS_LIKE_COMMENTS_DATA + videoId);
      const data2 = await fetchData(VIDEO_USER_PROFILE_PHOTO + channelId );
      setVideoLikeViewsAndCommentsData(data1?.items[0]?.statistics);
      setVideoUserProfilePhoto(data2?.items[0]?.snippet?.thumbnails?.default?.url)
    }

    getData();
  }, [videoId, channelId]);
  
  return {videoLikeViewsAndCommentsData, videoUserProfilePhoto};
}
