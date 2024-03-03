import useYoutubeVideoAPI from "../hooks/useYoutubeVideoAPI";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const { videoData } = useYoutubeVideoAPI();

  if (videoData == null) return;
  console.log(videoData);

  return (
    <div className="flex flex-wrap justify-between p-6">
      {videoData?.map((video) => (
        <Link to={"watch?v=" + video.id} key={video?.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
