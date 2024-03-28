import { useEffect, useState } from "react";
import { VIDEO_COMMENTS } from "../utils/constent";
import { fetchData } from "../utils/helper";

export default function useVideoComments(videoId) {
    const [videoComments, setVideoComments] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(VIDEO_COMMENTS + videoId);
      setVideoComments(data?.items);
    //   console.log(data?.items)
    }

    getData();
  }, [videoId]);
  
  return {videoComments};
}
