import { useEffect } from "react";
import { POPULAR_MOVIES } from "../utils/conf";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/Redux/Slices/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  async function fetchPopularMovies() {
    const popularMovies = await fetch(POPULAR_MOVIES, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth"),
        "Content-Type": "application/json",
      },
    });
    const data = await popularMovies.json();
    // console.log(data);
    dispatch(addPopularMovies(data.results));
  }
  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
