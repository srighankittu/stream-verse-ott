import { addTopRatedMovies } from "../utils/Redux/Slices/movieSlice";
import { TOP_RATED_MOVIES } from "../utils/conf";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  async function fetchTopRatedMovies() {
    const topRatedMovies = await fetch(TOP_RATED_MOVIES, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth"),
        "Content-Type": "application/json",
      },
    });
    const data = await topRatedMovies.json();
    // console.log(data);
    dispatch(addTopRatedMovies(data.results));
  }
  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
