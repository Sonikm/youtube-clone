import { useEffect, useState } from "react";
import { fetchData } from "../utils/helper";
import { API_KEY, YT_VIDEO_LIST_API } from "../utils/constent";

export default function useYtVideoList() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(YT_VIDEO_LIST_API + API_KEY);
      setVideoList(data?.items);
    }

    getData();
  }, []);

  return { videoList };
}
