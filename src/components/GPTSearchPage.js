import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchMovieSuggessions from "./GptSearchMovieSuggessions";
import { BACKGROUND_IMG } from "../utils/Constants";
// import { BACKGROUND_IMG } from "../utils/Constants";

const GPTSearchPage = () => {
  return (
    <div className="">
      <img src={BACKGROUND_IMG} alt="Back_IMG" className="absolute -z-10" />
      <GptSearchBar />
      <GptSearchMovieSuggessions />
    </div>
  );
};

export default GPTSearchPage;
