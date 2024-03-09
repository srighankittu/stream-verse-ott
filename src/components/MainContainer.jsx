import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
function MainContainer() {
  const movies = useSelector((store) => store.movies?.latestMovies);
  if (!movies) return;
  //   console.log(movies[0]);
  const { original_title, overview } = movies[0];
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
}

export default MainContainer;
