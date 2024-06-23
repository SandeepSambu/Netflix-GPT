import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NOWPLAYING_MOVIESLIST, options } from "../utils/Constants";
import { addnowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOWPLAYING_MOVIESLIST, options);

    const json = await data.json();
    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlaying && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
