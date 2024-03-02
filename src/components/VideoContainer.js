import useYoutubeVideoAPI from "../hooks/useYoutubeVideoAPI";
import VideoCard from "./VideoCard";

function VideoContainer() {
  const { videoData } = useYoutubeVideoAPI();

  if (videoData == null) return;
  console.log(videoData);


  return (
    <div className="flex flex-wrap justify-between p-6">
      {videoData["items"]?.map((items) => (
        <VideoCard videoInfo={items} key={items?.id} />
      ))}
    </div>
  );
}

export default VideoContainer;
