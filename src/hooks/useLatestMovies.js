import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLatestMovies } from "../utils/Redux/Slices/movieSlice";
import { LATEST_MOVIES } from "../utils/conf";

const useLatestMovies = () => {
  const dispatch = useDispatch();
  async function fetchLatestMovies() {
    const movies = await fetch(LATEST_MOVIES, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth"),
        "Content-Type": "application/json",
      },
    });
    const json = await movies.json();
    // console.log(json);
    dispatch(addLatestMovies(json.results));
  }
  useEffect(() => {
    fetchLatestMovies();
  }, []);
};

export default useLatestMovies;
