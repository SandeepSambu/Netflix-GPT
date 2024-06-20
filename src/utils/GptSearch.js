import { createSlice } from "@reduxjs/toolkit";

const GptSearch = createSlice({
  name: "gpt",
  initialState: {
    gptSearchPage: false,
  },
  reducers: {
    gptSearch: (state, action) => {
      state.gptSearchPage = !state.gptSearchPage;
    },
  },
});

export const { gptSearch } = GptSearch.actions;

export default GptSearch.reducer;
