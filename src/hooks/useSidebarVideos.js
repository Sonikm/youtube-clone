import { useEffect, useState } from "react";
import { fetchData } from "../utils/helper";
import { SIDEBAR_VIDEOS_API } from "../utils/constent";

export default function useSidebarVideos() {
  const [sidebarVideosList, setSidebarVideosList] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(SIDEBAR_VIDEOS_API);
      setSidebarVideosList(data?.items);
    }

    getData();
  }, []);

  return { sidebarVideosList };
}
