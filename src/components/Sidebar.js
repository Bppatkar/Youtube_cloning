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
              src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
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
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://icon-library.com/images/trending-icon/trending-icon-2.jpg"
              alt=""
            />
            <h2 className="p-2 ">Trending</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://www.kindpng.com/picc/m/177-1772005_playstore-icon-free-download-youtube-icon-transparent-background.png"
              alt=""
            />
            <h2 className="p-2 ">Shopping</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-music-4054103-3353178.png"
              alt=""
            />
            <h2 className="p-2 ">Music</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://cdn1.iconfinder.com/data/icons/youtube-23/27/Union-6-512.png"
              alt=""
            />
            <h2 className="p-2 ">Films</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://cdn-icons-png.flaticon.com/512/2989/2989838.png"
              alt=""
            />
            <h2 className="p-2 ">Live</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-gaming-4941797-4109197.png"
              alt=""
            />
            <h2 className="p-2 ">Gaming</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://c8.alamy.com/comp/2B3HCP4/youtube-icon-2B3HCP4.jpg"
              alt=""
            />
            <h2 className="p-2 ">News</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://cdn-icons-png.flaticon.com/512/74/74626.png"
              alt=""
            />
            <h2 className="p-2 ">Sport</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://cdn-icons-png.flaticon.com/256/116/116860.png"
              alt=""
            />
            <h2 className="p-2 ">Courses</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://icon-library.com/images/hanger-icon/hanger-icon-14.jpg"
              alt=""
            />
            <h2 className="p-2 ">Fashion & Beauty</h2>
          </span>
          <span className="flex items-center">
            <img
              className="h-8 mr-2"
              src="https://t4.ftcdn.net/jpg/05/52/46/89/360_F_552468922_y1ruRnOZ2P2ksnd7tcIiv9yC50fguZBw.jpg"
              alt=""
            />
            <h2 className="p-2 ">Podcasts</h2>
          </span>
        </div>
        <div className="border-b-2 border-gray-200"></div>
      </div>
    </div>
  );
};

export default Sidebar;
