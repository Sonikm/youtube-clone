import { useEffect, useState } from "react";
import fetchAPI from "../utils/fetchAPI";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { casheResults } from "../utils/searchSlice";

export default function useSearchVideo(query) {
  const [searchVideo, setSearchVideo] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //* DEBOUNCING
    // API call

    // make an api call after every key press
    // but if the difference between 2 API calls is <200ms
    // decline the API call

    const timer = setTimeout(() => {
      if (searchCache[query]) {
        setSearchVideo(searchCache[query]);
      } else {
        getData();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query, searchCache]);

  // console.log(Object.keys(searchCache).length);
  

  async function getData() {
    try {
      const data = await fetchAPI(YOUTUBE_SEARCH_API + query);
      setSearchVideo(data[1]);
      dispatch(
        casheResults({
          [query]: data[1],
        })
      );
    } catch (err) {
      // console.log(err);
    }
  }

  return { searchVideo };
}

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
