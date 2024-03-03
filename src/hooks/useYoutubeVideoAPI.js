import { useEffect, useState } from "react";
import fetchAPI from "../utils/fetchAPI";
import { YOUTUBE_API_URL } from "../utils/constants";

function useYoutubeVideoAPI() {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAPI(YOUTUBE_API_URL);
        setVideoData(data["items"]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return { videoData };
}

export default useYoutubeVideoAPI;
