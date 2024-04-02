import { useEffect, useState } from "react";
import { SEARCH_VIDEO_LIST_API } from "../utils/constent";
import { fetchData } from "../utils/helper";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function useSearchVideoList() {
    const [searchVideoList, setSearchVideoList] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const category = useSelector(store => store.category.category);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(SEARCH_VIDEO_LIST_API + (query || category));
      setSearchVideoList(data?.items);
    }

    getData();
  }, [query, category]);
  
  return {searchVideoList};
}
