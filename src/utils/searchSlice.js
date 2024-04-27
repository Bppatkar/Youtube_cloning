import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
