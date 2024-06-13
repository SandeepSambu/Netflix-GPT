import React from "react";
import { PLAY_LOGO } from "../utils/Constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-72 px-10 absolute w-[1520px] aspect-video bg-gradient-to-tr from-black">
      <h1 className="text-4xl text-white">{title}</h1>
      <h3 className="text-lg w-1/2 my-8 text-white">{overview}</h3>
      <div className="flex">
        <button className="flex bg-white text-black px-7 py-2 rounded-lg">
          <img className="w-5 bg-black mx-2" src={PLAY_LOGO} alt="" />
          Play
        </button>
        <button className="flex bg-gray-400 bg-opacity-90 text-white px-7 py-2 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
