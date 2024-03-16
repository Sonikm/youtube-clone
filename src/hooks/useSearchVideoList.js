import { useEffect, useState } from "react";
import { SEARCH_VIDEO_LIST_API } from "../utils/constent";
import { fetchData } from "../utils/helper";

export default function useSearchVideoList() {
    const [searchVideoList, setSearchVideoList] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(SEARCH_VIDEO_LIST_API + "Hindi");
      setSearchVideoList(data?.items);
    }

    getData();
  }, []);

  return {searchVideoList};
}
