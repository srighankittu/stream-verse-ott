import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrilerVideo } from "../utils/Redux/Slices/movieSlice";
import { VIDEO_DATA } from "../utils/conf";
const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  async function fetchVideoData() {
    const data = await fetch(VIDEO_DATA + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth"),
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    const trailer = json.results.filter(
      (movie) => movie.name === "Trailer" || movie.name === "Official Trailer"
    );
    const trailerVideo = trailer.length ? trailer[0] : json.results[0];
    dispatch(addTrilerVideo(trailerVideo));
  }
  useEffect(() => {
    fetchVideoData();
  }, []);
};

export default useMovieTrailer;
