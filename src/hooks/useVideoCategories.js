import { useEffect, useState } from "react";
import { fetchData } from "../utils/helper";
import { VIDEO_CATEGORIES_API } from "../utils/constent";

export default function useYtVideoList() {
  const [videoCategories, setVideoCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(VIDEO_CATEGORIES_API);
      setVideoCategories(data?.items);
    }

    getData();
  }, []);

  return { videoCategories };
}
