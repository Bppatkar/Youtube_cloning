import React, { useEffect, useRef, useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import "./video-container.css";

import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoItem, setVideoItem] = useState([]);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { current: container } = videoContainerRef;
      if (container) {
        container.scrollTop += window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_VIDEO_API);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      // console.log(data.items[0]);
      setVideoItem(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="video-container">
      <ButtonList />
      <div
        className="video-content"
        ref={videoContainerRef}
        style={{ flex: "1", overflowY: "hidden" }}
      >
        {videoItem.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard data={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
