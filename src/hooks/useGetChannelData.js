import React, { useEffect, useState } from "react";
import { CHANNEL_INFO } from "../utils/constent";
import { fetchData } from "../utils/helper";

function useGetChannelData() {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(CHANNEL_INFO);
      setChannelData(data?.items[0]);
    }

    getData();
  }, []);

  return {channelData};
}

export default useGetChannelData;
