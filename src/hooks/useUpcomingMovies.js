import { useEffect } from "react";
import { UPCOMING_MOVIES } from "../utils/conf";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/Redux/Slices/movieSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  async function fetchUpcomingMovies() {
    const upcomingMovies = await fetch(UPCOMING_MOVIES, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth"),
        "Content-Type": "application/json",
      },
    });
    const data = await upcomingMovies.json();
    console.log(data);
    dispatch(addUpcomingMovies(data.results));
  }
  useEffect(() => {
    fetchUpcomingMovies();
  });
};

export default useUpcomingMovies;
