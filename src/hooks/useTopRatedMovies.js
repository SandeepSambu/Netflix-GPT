import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TOPRATED_MOVIESLIST, options } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TOPRATED_MOVIESLIST, options);

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
