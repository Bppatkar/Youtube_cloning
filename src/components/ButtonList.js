import React, { useState } from "react";

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

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };

  return (
    <div className="flex overflow-x-auto space-x-2 mt-3 mr-4 w-full ">
      {listOfButtons.map((buttonText, index) => (
        <button
          key={index}
          className={`${
            selectedButton === buttonText
              ? "bg-slate-800 text-white"
              : "bg-gray-300"
          } hover:bg-slate-700 text-white font-bold py-2 px-4  inline-flex items-center overflow-hidden rounded-xl text-center`}
          onClick={() => handleButtonClick(buttonText)}
        >
          {buttonText}
          {selectedButton === buttonText && (
            <span className="ml-2 overflow-hidden"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
