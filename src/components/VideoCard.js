import React from "react";

const VideoCard = ({ data }) => {
  // console.log(data);

  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-3 m-2 w-67 shadow-lg rounded-lg">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="videoImage"
      />
      <div className="p-2">
        {/* <img src="" alt="channelIcon" /> */}
        <h3 className="py-2 font-semibold w-[300px]">{title}</h3>
        <h2 className="ml-2 font-bold">{channelTitle}</h2>
        <div className="flex ml-2">
          <h4>{statistics.viewCount} views .</h4>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
