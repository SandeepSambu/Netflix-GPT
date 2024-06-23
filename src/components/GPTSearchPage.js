import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchMovieSuggessions from "./GptSearchMovieSuggessions";
import { BACKGROUND_IMG } from "../utils/Constants";
import { useSelector } from "react-redux";

const GPTSearchPage = () => {
  const movies = useSelector((store) => store.gpt.gptMovieCards);
  return (
    <div className="">
      <img src={BACKGROUND_IMG} alt="Back_IMG" className="absolute -z-10" />
      <GptSearchBar />
      {movies && <GptSearchMovieSuggessions />}
    </div>
  );
};

export default GPTSearchPage;
