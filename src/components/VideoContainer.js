import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import useYtVideoList from "../hooks/useYtVideoList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleElements } from "../utils/appSlice";
import Shimmer from "./ui/Shimmer";
import { YT_VIDEO_LIST_API } from "../utils/constent";
import InfiniteScroll from "react-infinite-scroll-component";

function VideoContainer() {
  // const { videoList} = useYtVideoList();
  const dispatch = useDispatch();
  const [videoList, setVideoList] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [showShimmer, setShowShimmer] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const res = await fetch(`${YT_VIDEO_LIST_API}&pageToken=${pageToken}`);
    const data = await res.json();

    try {
      if (data?.items?.length > 0) {
        setVideoList((prevVideos) => [...prevVideos, ...data.items]);
        setPageToken(data.nextPageToken);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setShowShimmer(false);
    }
  }

  function handleClick() {
    dispatch(toggleElements(false));
  }

  // if (!videoList?.length || videoList === null) return <Shimmer />;

  return showShimmer ? (
    <Shimmer />
  ) : (
    <InfiniteScroll
      dataLength={videoList.length}
      next={getVideos}
      hasMore={hasMore}
      loader={<p className="mx-auto">No more videos to load</p>}
    >
      <div className=" flex flex-wrap gap-y-10 gap-x-4 sm:justify-center ">
        {videoList.map((video) => (
          <Link
            to={`watch?v=${video?.id?.videoId || video?.id}`}
            onClick={() => handleClick()}
            key={video?.id?.videoId || video?.id}
          >
            <VideoCard
              videoInfo={video?.snippet}
              videoId={video?.id?.videoId || video?.id}
            />
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default VideoContainer;
