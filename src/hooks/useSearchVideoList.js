import { useEffect, useState } from "react";
import { SEARCH_VIDEO_LIST_API } from "../utils/constent";
import { fetchData } from "../utils/helper";
import { useSearchParams } from "react-router-dom";

export default function useSearchVideoList() {
    const [searchVideoList, setSearchVideoList] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("search_query");
    console.log(query)

  useEffect(() => {
    async function getData() {
      const data = await fetchData(SEARCH_VIDEO_LIST_API + (query));
      setSearchVideoList(data?.items);
    }

    getData();
  }, [query]);
  
    return {searchVideoList};
}
