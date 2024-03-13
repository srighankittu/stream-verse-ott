import MovieList from "./MovieList";
import { useSelector } from "react-redux";
function SecondaryContainer() {
  const latestMovies = useSelector((store) => store.movies?.latestMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingmovies = useSelector((store) => store.movies?.upcomingMovies);
  console.log(upcomingmovies);
  return (
    <div className="bg-black">
      <div className="-mt-40 pl-12 relative z-20">
        <MovieList title={"Now Playing Movies"} MoviesList={latestMovies} />
        <MovieList title={"Top Rated Movies"} MoviesList={topRatedMovies} />
        <MovieList title={"Upcoming Movies"} MoviesList={upcomingmovies} />
        <MovieList title={"Popular"} MoviesList={popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
