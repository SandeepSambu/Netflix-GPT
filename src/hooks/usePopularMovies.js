import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POPULAR_MOVIESLIST, options } from "../utils/Constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIESLIST, options);

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popular && getPopularMovies();
  }, []);
};

export default usePopularMovies;
