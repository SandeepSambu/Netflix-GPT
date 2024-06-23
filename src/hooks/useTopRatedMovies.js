import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOPRATED_MOVIESLIST, options } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(TOPRATED_MOVIESLIST, options);

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRated && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
