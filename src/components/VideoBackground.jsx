import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
function VideoBackground({ id }) {
  useMovieTrailer(id);
  const video = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="w-screen aspect-w-16 aspect-h-9">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" + video?.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
