import { useEffect, useState } from "react";
import { SEARCH_AUTO_COMPLETE_API } from "../utils/constent";
import { fetchData } from "../utils/helper.js";

export default function useVideoSuggestions(query) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(SEARCH_AUTO_COMPLETE_API + query);
      setSuggestions(data[1]);
    }

    
    getData();
  }, [query]);
    return { suggestions };
}
