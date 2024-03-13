import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";
function MainContainer() {
  const movies = useSelector((store) => store.movies?.latestMovies);
  if (!movies) return;
  const { original_title, overview, id } = movies[0];
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
      <SecondaryContainer />
    </div>
  );
}

export default MainContainer;
