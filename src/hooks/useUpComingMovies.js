import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPCOMING_MOVIESLIST, options } from "../utils/Constants";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComing = useSelector((store) => store.movies.upComingMovies);
  const getUpComingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIESLIST, options);

    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !upComing && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
