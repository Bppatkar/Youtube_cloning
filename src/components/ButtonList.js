import React, { useState, useEffect, useRef } from "react";

const ButtonList = () => {
  const listOfButtons = [
    "All",
    "Javascript",
    "English",
    "Satsang",
    "Science",
    "History",
    "Mathematics",
    "Programming",
    "Literature",
    "Art",
    "Music",
    "Sports",
  ];

  const [selectedButton, setSelectedButton] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const containerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const viewportWidth = window.innerWidth;
    setShowArrow(containerWidth > viewportWidth);
  }, [showMore]);

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex mt-3 mr-4 w-full overflow-x-hidden">
      <div ref={containerRef} className="flex">
        {listOfButtons.map((buttonText, index) => (
          <button
            key={index}
            className={`${
              selectedButton === buttonText
                ? "bg-slate-800 text-white"
                : "bg-gray-300"
            } hover:bg-slate-700 text-white font-bold py-2 px-4 m-1 rounded-xl text-center`}
            onClick={() => handleButtonClick(buttonText)}
          >
            {buttonText}
          </button>
        ))}
      </div>
      {showArrow && (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 m-1 rounded-xl"
          onClick={handleShowMore}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default ButtonList;
