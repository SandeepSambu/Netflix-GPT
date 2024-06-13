import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="p-2 my-5 mx-11">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <div className="flex overflow-y-scroll no-scrollbar py-4">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
