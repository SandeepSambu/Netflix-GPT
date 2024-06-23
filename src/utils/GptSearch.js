import { createSlice } from "@reduxjs/toolkit";

const GptSearch = createSlice({
  name: "gpt",
  initialState: {
    gptSearchPage: false,
    gptMovies: [
      "Dookudu",
      "F2: Fun and Frustration",
      "Ready",
      "Eega",
      "Bommarillu",
    ],
    gptMovieCards: null,
  },
  reducers: {
    gptSearch: (state, action) => {
      state.gptSearchPage = !state.gptSearchPage;
    },
    addGptMovies: (state, action) => {
      const { gptMovies, gptMovieCards } = action.payload;
      // state.gptMovies = gptMovies;
      state.gptMovieCards = gptMovieCards;
    },
    clearGptMovies: (state, action) => {
      state.gptMovieCards = null;
    },
  },
});

export const { gptSearch, addGptMovies, clearGptMovies } = GptSearch.actions;

export default GptSearch.reducer;
