import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 items-center shadow-md w-[99.6%] ">
      <div className="flex items-center justify-start col-span-2 p-">
        <img
          className="h-8 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small/bullet-menu-icon-free-vector.jpg"
          alt="menu"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="ml-3 h-7 text-center"
          src="./logo.png"
          alt="youtubelogo"
        />
      </div>
      <div className=" col-span-9 text-center flex  ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="border border-gray-400 justify-center p-2 rounded-l-full w-[710px]"
        />
        <button className=" border border-gray-400  rounded-r-full bg-gray-100 px-5 py-1">
          <img className="h-6" src="./search.PNG" alt="searchLogo" />
        </button>
        <img
          className="h-10 ml-8  flex gap-4 bg-slate-100 p-2 rounded-full"
          src="https://static-00.iconduck.com/assets.00/mic-icon-1433x2048-yncr751o.png"
          alt="mick"
        />
      </div>
      <div className="flex col-span-2 justify-end ">
        <img className="h-8 mr-5" src="./video.PNG" alt="notification icon" />
        <img className="h-8 mr-5" src="./bell.PNG" alt="notification icon" />
        <img
          className="h-8"
          src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
