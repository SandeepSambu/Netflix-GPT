import useTrailerURL from "../hooks/useTrailerURL";
import { YOUTUBE_TRAILERVIDEO } from "../utils/Constants";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const trailerKey = useSelector((store) => store.movies.trailer);

  useTrailerURL(id);

  return (
    <div className="">
      <iframe
        className="w-[1520px] aspect-video "
        src={YOUTUBE_TRAILERVIDEO + trailerKey + "?autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
