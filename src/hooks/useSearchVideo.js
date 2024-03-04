import { useEffect, useState } from "react";
import fetchAPI from "../utils/fetchAPI";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

export default function useSearchVideo(query) {
  
  const [searchVideo, setSearchVideo] = useState([]);

  useEffect(() => {
    //* DEBOUNCING
    // API call

    // make an api call after every key press
    // but if the difference between 2 API calls is <200ms
    // decline the API call

    const timer = setTimeout(() => getData(), 200);

    return () => clearTimeout(timer);
  }, [query]);

  /**
   *  key - i
   *   - render the component
   *   - useEffect();
   *   - start the timer => make API call after 200 ms
   *
   *  key - ip
   *   - reconsilisation is started
   *   - destroy the component(useEffect return method -> clearTimeout)
   *   - clears the thing up
   *   - re-render the component
   *   - call the useEffect() again
   *   - start the timer again => make api call after 200 ms
   *
   *  setTimeout(200ms) => make an API call
   */

  async function getData() {
    try {
      const data = await fetchAPI(YOUTUBE_SEARCH_API + query);
      setSearchVideo(data[1]);
    } catch (err) {
      console.log(err);
    }
  }

  return { searchVideo };
}
