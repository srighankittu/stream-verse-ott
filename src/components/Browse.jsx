import Header from "./Header";
import banner from "/assets/banner.webp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLatestMovies } from "../utils/Redux/Slices/movieSlice";

function Browse() {
  const dispatch = useDispatch();
  async function fetchLatestMovies() {
    const movies = await fetch("http://localhost:3000/user/latestMovies", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth"),
        "Content-Type": "application/json",
      },
    });
    const json = await movies.json();
    console.log(json);
    dispatch(addLatestMovies(json.results));
  }
  useEffect(() => {
    fetchLatestMovies();
  }, []);
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center h-full w-full fixed top-0 left-0"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
    </div>
  );
}

export default Browse;
