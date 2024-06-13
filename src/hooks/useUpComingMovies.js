import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UPCOMING_MOVIESLIST, options } from "../utils/Constants";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIESLIST, options);

    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
