import MovieList from "./MovieList";
import { useSelector } from "react-redux";
function SecondaryContainer() {
  const movies = useSelector((store) => store.movies?.latestMovies);
  return (
    <div className="bg-black">
      <div className="-mt-40 pl-12 relative z-20">
        <MovieList title={"Now Playing Movies"} latestMoviesList={movies} />
        <MovieList title={"Now Playing Movies"} latestMoviesList={movies} />
        <MovieList title={"Now Playing Movies"} latestMoviesList={movies} />
        <MovieList title={"Now Playing Movies"} latestMoviesList={movies} />
        <MovieList title={"Now Playing Movies"} latestMoviesList={movies} />
        <MovieList title={"Now Playing Movies"} latestMoviesList={movies} />
        <MovieList title={"Now Playing Movies"} latestMoviesList={movies} />
        <MovieList title={"Now Playing Movies"} latestMoviesList={movies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
