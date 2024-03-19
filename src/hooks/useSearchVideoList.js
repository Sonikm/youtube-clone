import { useEffect, useState } from "react";
import { SEARCH_VIDEO_LIST_API } from "../utils/constent";
import { fetchData } from "../utils/helper";
import { useSelector } from "react-redux";

export default function useSearchVideoList() {
    const [searchVideoList, setSearchVideoList] = useState([]);
    // const query = useSelector(store => store.search.query);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(SEARCH_VIDEO_LIST_API + "study");
      setSearchVideoList(data?.items);
      // console.log(query)
    }

    getData();
  }, []);
  
  return {searchVideoList};
}
