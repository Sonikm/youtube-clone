import { useEffect, useState } from "react";
import { SEARCH_AUTO_COMPLETE_API } from "../utils/constent";
import { fetchData } from "../utils/helper.js";
import { useSelector } from "react-redux";

export default function useVideoSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const query = useSelector(store=> store.search.query);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(SEARCH_AUTO_COMPLETE_API + query);
      setSuggestions(data[1]);
    }

    
    getData();
  }, [query]);
    return { suggestions };
}
