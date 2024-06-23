import React, { useRef } from "react";
import lang from "../utils/ConstantLanguages";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies } from "../utils/GptSearch";
import { options } from "../utils/Constants";

const GptSearchBar = () => {
  const { language } = useSelector((store) => store.config);

  const dispatch = useDispatch();

  const movies = useSelector((store) => store.gpt.gptMovies);

  const searchText = useRef();

  const GptMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // const gptQuery =
    //   "suggest some top 5" +
    //   searchText.current.value +
    //   ".give me only the names of the movies in comma seperated without anything else like the example: movie 1, movie 2, movie 3, movie 4, movie 5";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    // dispatch(addGptMovies(gptMovies));

    const movieResults = movies.map((movie) => GptMovies(movie));

    const results = await Promise.all(movieResults);

    dispatch(addGptMovies({ gptMovieCards: results }));
  };

  return (
    <div className="pt-[10%]">
      <div className="bg-black mx-48 flex justify-center grid grid-cols-12 rounded-md bg-opacity-80">
        <form
          className="col-span-12 mx-28 grid grid-cols-12 my-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[language].gptSearchPlaceholder}
            className="col-span-8 py-3 px-2 rounded-md"
          />
          <button
            className="bg-red-600 py-3 mx-2 col-span-4 rounded-md"
            onClick={handleGptSearchClick}
          >
            {lang[language].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
