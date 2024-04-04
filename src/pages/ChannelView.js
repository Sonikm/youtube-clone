import React from "react";
import useGetChannelData from "../hooks/useGetChannelData";

function ChannelView() {
  const { channelData } = useGetChannelData();
  if (!channelData) return;
  console.log(channelData);

  const { brandingSettings, snippet, statistics } = channelData;

  return <div></div>;
}

export default ChannelView;
