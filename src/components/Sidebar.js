import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className=" m-2 p-2 ">
          <Link to="/">
            <span className="flex items-center">
              <img className="h-6 mr-2" src="./home.PNG" alt="HomeButton" />
              <h2 className="p-2 font-semibold">Home</h2>
            </span>
          </Link>
          <span className="flex items-center">
            <img
              className="h-6 mr-2"
              src="https://i.pinimg.com/474x/02/cc/2d/02cc2df2074675a18e9edf1d1e3dbb43.jpg"
              alt="ShortsButton"
            />
            <h2 className="p-2 font-semibold">Shorts</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-6 mr-2"
              src="./subscription.PNG"
              alt="SubscriptionsButton"
            />
            <h2 className="p-2 font-semibold">Subscriptions</h2>
          </span>
        </div>
        <div className="border-b-2 border-gray-200"></div>
        <div className=" m-2 p-2">
          <h1 className="p-2 font-bold">You &gt;</h1>
          <span className="flex items-center">
            <img
              className="h-6 mr-2"
              src="https://cdn.iconscout.com/icon/free/png-256/free-user-channel-4941768-4109168.png"
              alt="YourChannel"
            />
            <h2 className="p-2">Your Channel</h2>
          </span>
          <span className="flex items-center">
            <img className="h-6" src="./history.PNG" alt="HisButton" />
            <h2 className="p-2">History</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-6"
              src="https://cdn1.iconfinder.com/data/icons/youtube-23/27/Union-6-512.png"
              alt="YourChannel"
            />
            <h2 className="p-2">Playlists</h2>
          </span>
          <span className="flex items-center">
            <img className="h-6" src="./your-video.PNG" alt="YourChannel" />
            <h2 className="p-2">Your Videos</h2>
          </span>
          <span className="flex items-center">
            <img className="h-6" src="./watch-later.PNG" alt="HisButton" />
            <h2 className="p-2">Watch Later</h2>
          </span>
          <span className="flex items-center">
            <img className="h-6" src="./liked video.PNG" alt="HisButton" />
            <h2 className="p-2">Liked Videos</h2>
          </span>
        </div>
        <div className="border-b-2 border-gray-200"></div>
        <div className=" m-2 p-2">
          <h1 className="p-2 font-bold">Subscription</h1>
          <h2 className="p-2">Free Code Camp</h2>
          <h2 className="p-2">Apna Collage</h2>
          <h2 className="p-2">Chai aur Code</h2>
          <h2 className="p-2">Thapa Technical</h2>
          <h2 className="p-2">Code Help</h2>
          <span className="flex items-center">
            <img className="h-6 mr-2" src="./show more.PNG" alt="" />
            <h2 className="p-2">Show More (23)</h2>
          </span>
        </div>
        <div className="border-b-2 border-gray-200"></div>
        <div className=" m-2 p-2">
          <h1 className="p-2 font-bold">Explore</h1>
          <h2 className="p-2 ml-3 ">
            <img
              className="h-8"
              src="https://icon-library.com/images/trending-icon/trending-icon-2.jpg"
              alt=""
            />
            Trending
          </h2>
          <h2 className="p-2 ml-3 ">
            <img
              className="h-8"
              src="https://www.kindpng.com/picc/m/177-1772005_playstore-icon-free-download-youtube-icon-transparent-background.png"
              alt=""
            />
            Shopping
          </h2>
          <h2 className="p-2 ml-3 ">
            <img
              className="h-8"
              src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-music-4054103-3353178.png"
              alt=""
            />
            Music
          </h2>
          <h2 className="p-2 ml-3 ">Films</h2>
          <h2 className="p-2 ml-3 ">Live</h2>
          <h2 className="p-2 ml-3 ">Gaming</h2>
          <h2 className="p-2 ml-3 ">News</h2>
          <h2 className="p-2 ml-3 ">Sport</h2>
          <h2 className="p-2 ml-3 ">Courses</h2>
          <h2 className="p-2 ml-3 ">Fashion & beauty</h2>
          <h2 className="p-2 ml-3 ">Podcasts</h2>
        </div>
        <div className="border-b-2 border-gray-200"></div>
      </div>
    </div>
  );
};

export default Sidebar;
