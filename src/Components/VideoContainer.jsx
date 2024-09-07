import React from "react";
import useGetVideos from "../Hooks/useGetVideos";
import VideoCard, {AdVideoCard} from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  useGetVideos();

  const videos = useSelector((store) => store.videos.y_videos);

  console.log(videos);

  return (
    <div className='flex flex-wrap'>
      { videos[0] && <AdVideoCard  video={videos[0]} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}><VideoCard key={video.id} video={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
