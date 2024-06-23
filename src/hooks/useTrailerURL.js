import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TRAILER_URL, options } from "../utils/Constants";
import { addTrailer } from "../utils/movieSlice";

const useTrailerURL = (id) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.trailer);
  const trailer = async () => {
    const data = await fetch(
      TRAILER_URL + id + "/videos?language=en-US",
      options
    );
    const json = await data.json();

    const filteredVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = !filteredVideos ? json.results[0] : filteredVideos[0];

    dispatch(addTrailer(trailer?.key));
  };

  useEffect(() => {
    !movieTrailer && trailer();
  }, []);
};

export default useTrailerURL;
