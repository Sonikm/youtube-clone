import { useEffect, useState } from "react";
import fetchAPI from "../utils/fetchAPI";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

export default function useSearchVideo(query) {
  const [searchVideo, setSearchVideo] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchAPI(YOUTUBE_SEARCH_API + query);
        setSearchVideo(data[1]);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, [query]);

  return { searchVideo };
}
