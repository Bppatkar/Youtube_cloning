import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        searchFunction();
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  const searchFunction = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await res.json();
    // console.log(data[1]);
    setSuggestions(data[1]);
    dispatch(cacheResults({ [searchQuery]: data[1] }));
  };

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
        <img className="ml-3 h-7 " src="./logo.png" alt="youtubelogo" />
      </div>
      <div className="flex-grow"></div>
      <div>
        <div className="relative flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="border border-gray-400 justify-center p-2 rounded-l-full w-[310px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 rounded-r-full bg-gray-100 p-2"
            style={{ verticalAlign: "middle" }}
          >
            <img className="h-[19px]" src="./search.PNG" alt="searchLogo" />
          </button>
        </div>

        {showSuggestions && searchQuery && (
          <div
            className="absolute z-10 mt-4 top-10 rounded-lg bg-white border border-gray-300 p-4 m-2 shadow-lg"
            style={{
              minWidth: "310px",
              width: "fit-content",
              maxWidth: "calc(100% - 500px)",
            }}
          >
            <ul className="list-none p-0">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="flex items-center mb-2 hover:bg-gray-100"
                >
                  <img
                    className="h-5 mr-2"
                    src="./search.PNG"
                    alt="searchLogo"
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-4"></div>
      <img
        className="h-10 ml- -inset-20  bg-slate-100 p-3 rounded-full"
        src="https://static-00.iconduck.com/assets.00/mic-icon-1433x2048-yncr751o.png"
        alt="mick"
      />
      <div className="flex items-center justify-end col-span-2">
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
