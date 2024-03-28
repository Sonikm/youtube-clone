import { useState, useEffect } from "react";
import { fetchData } from "../utils/helper";
import { VIDEO_CARD_DATA } from "../utils/constent";

function usePlayVideoData(videoId) {
  const [videoPlayData, setVideoPlayData] = useState(null);
//   const [videoPlayData, setVideoPlayData] = useState(null);

useEffect(() => {
    async function getData() {
      const data = await fetchData(VIDEO_CARD_DATA + videoId);
      setVideoPlayData(data?.items[0]);
    }

    getData();
  }, [videoId]);
  
  return {videoPlayData};
}

export default usePlayVideoData