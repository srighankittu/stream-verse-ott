import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slices/movieSlice.js";

const movieStore = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default movieStore;
