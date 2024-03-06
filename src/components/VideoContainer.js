import useYoutubeVideoAPI from "../hooks/useYoutubeVideoAPI";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const { videoData } = useYoutubeVideoAPI();

  if (videoData == null) return;

  return (
    <div className="flex flex-wrap justify-between p-6">
      {
        <Link to={"watch?v=" + videoData[0].id}>
          <AdVideoCard video={videoData[0]} />
        </Link>
      }
      {videoData?.map((video) => (
        <Link to={"watch?v=" + video.id} key={video?.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
