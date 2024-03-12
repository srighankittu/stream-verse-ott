import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    latestMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addLatestMovies: (state, action) => {
      state.latestMovies = action.payload;
    },
    addTrilerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addLatestMovies, addTrilerVideo } = movieSlice.actions;
export default movieSlice.reducer;
