import { useEffect, useState } from "react";
import { SEARCH_AUTO_COMPLETE_API } from "../utils/constent";
import { fetchData } from "../utils/helper.js";
import { useDispatch, useSelector } from "react-redux";
import { casheResult } from "../utils/casheSlice.js";

export default function useVideoSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const query = useSelector((store) => store.search.query);
  const dispatch = useDispatch();
  const casheSearch = useSelector((store) => store.cashe);

  useEffect(() => {
    //* DEBOUNCING
    // This section implements debouncing to reduce API calls frequency.
    // It delays the execution of fetchData function by 200ms after the last key press.
    // If another key press occurs within 200ms, the previous setTimeout gets cleared
    // and a new setTimeout is set, ensuring that fetchData is only called
    // when there is a pause in typing.
    const timer = setTimeout(() => {
      if (casheSearch[query]) {
        setSuggestions(casheSearch[query]); // If the search results are cached, use them
      } else {
        getData(); // Otherwise, fetch data from the API
      }
    }, 200); // Debouncing time of 200ms

    async function getData() {
      const data = await fetchData(SEARCH_AUTO_COMPLETE_API + query); // Fetching data from API
      setSuggestions(data[1]); // Updating suggestions state with fetched data
      dispatch(casheResult({ [query]: data[1] })); // Caching fetched results in Redux store
    }

    return () => clearTimeout(timer);
  }, [query]);
  return { suggestions };
}
