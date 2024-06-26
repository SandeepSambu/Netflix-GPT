import React from "react";
import { MOVIE_POSTER } from "../utils/Constants";

const MovieCard = ({ posterPath, movie }) => {
  return (
    <div className="w-48 px-1">
      <img
        className="rounded-md"
        src={MOVIE_POSTER + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
