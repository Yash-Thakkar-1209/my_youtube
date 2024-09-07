import React from "react";


const VideoCard = ({video}) => {

    console.log(video);

    if (!video) return <p>Loading..</p>;

  return ( 
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img  className='rounded-lg' src={video?.snippet?.thumbnails?.medium?.url} alt="" />
      <ul>
            <li className='font-bold py-2'>{video?.snippet?.title}</li>
            <li>{video?.snippet?.channelTitle}</li>
            <li>{video.statistics.viewCount} Views</li>
          </ul>
    </div>
  );
};

// Hire-Order-Component to Show AD Card

export const AdVideoCard = ({video}) => {
    return (
        <div className="py-3 px-4 m-1 border border-red-900">
            <VideoCard video={video} />
        </div>
    )
}

export default VideoCard;
