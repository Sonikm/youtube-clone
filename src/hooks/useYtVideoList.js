import { useEffect, useState } from "react";
import { fetchData } from "../utils/helper";
import { YT_VIDEO_LIST_API , SEARCH_VIDEO_LIST_API} from "../utils/constent";
import { useSelector } from "react-redux";

export default function useYtVideoList() {
  const [videoList, setVideoList] = useState([]);
  const category = useSelector(store => store.category.category);

  useEffect(() => {
    async function getData() {
      // if(category === 'All'){
      //   const data = await fetchData(YT_VIDEO_LIST_API);
      //   setVideoList(data?.items);
      // }else {
      //   const data = await fetchData(SEARCH_VIDEO_LIST_API + category);
      //   setVideoList(data?.items);
      // }
      const data = await fetchData(SEARCH_VIDEO_LIST_API + category);
      setVideoList(data?.items);
    }

    getData();
  }, [category]);

  return { videoList };
}
