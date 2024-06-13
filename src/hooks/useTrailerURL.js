import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TRAILER_URL, options } from "../utils/Constants";
import { addTrailer } from "../utils/movieSlice";

const useTrailerURL = (id) => {
  const dispatch = useDispatch();
  console.log(id);
  const trailer = async () => {
    const data = await fetch(
      TRAILER_URL + id + "/videos?language=en-US",
      options
    );
    const json = await data.json();

    const filteredVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    console.log(filteredVideos);
    const trailer = !filteredVideos ? json.results[0] : filteredVideos[0];

    dispatch(addTrailer(trailer?.key));
  };

  useEffect(() => {
    trailer();
  }, []);
};

export default useTrailerURL;
