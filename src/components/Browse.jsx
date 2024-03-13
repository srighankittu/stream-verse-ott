import Header from "./Header";
// import banner from "/assets/banner.webp";
import useLatestMovies from "../hooks/useLatestMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

function Browse() {
  useLatestMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default Browse;
