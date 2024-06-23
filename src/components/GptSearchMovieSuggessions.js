import React, { useEffect } from "react";
import MovieList from "./MovieList";
import { useDispatch, useSelector } from "react-redux";
import { clearGptMovies } from "../utils/GptSearch";

const GptSearchMovieSuggessions = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.gpt.gptMovieCards);
  useEffect(() => {
    return () => {
      dispatch(clearGptMovies());
    };
  }, []);
  return (
    <div className="bg-black bg-opacity-80 text-white m-2 p-2">
      {movies.map(
        (movie) =>
          movie && (
            <MovieList
              key={movie.title}
              title={movie[0].title}
              movies={movie}
            />
          )
      )}
    </div>
  );
};

export default GptSearchMovieSuggessions;
