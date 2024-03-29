import { useEffect, useState } from "react";
import { VIDEO_VIEWS_LIKE_COMMENTS_DATA, VIDEO_USER_PROFILE_PHOTO ,SUBSCRIBE_COUNT} from "../utils/constent";
import { fetchData } from "../utils/helper";


export default function useVideoAdditionalData(videoId, channelId) {
    const [videoLikeViewsAndCommentsData, setVideoLikeViewsAndCommentsData] = useState(null);
    const [videoUserProfilePhoto, setVideoUserProfilePhoto] = useState(null);
    const [subscribeCount, setSubscribeCount] = useState(null);

  useEffect(() => {
    async function getData() {
      const data1 = await fetchData(VIDEO_VIEWS_LIKE_COMMENTS_DATA + videoId);
      const data2 = await fetchData(VIDEO_USER_PROFILE_PHOTO + channelId );
      const data3 = await fetchData(SUBSCRIBE_COUNT + channelId);
      setVideoLikeViewsAndCommentsData(data1?.items[0]?.statistics);
      setVideoUserProfilePhoto(data2?.items[0]?.snippet?.thumbnails?.default?.url);
      setSubscribeCount(data3?.items[0]?.statistics)
    }

    getData();
  }, [videoId, channelId]);
  
  return {videoLikeViewsAndCommentsData, videoUserProfilePhoto, subscribeCount};
}
