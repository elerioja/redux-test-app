import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "library",
  initialState: {
    current: [],
  },
  reducers: {
    updateLibrary(state, { payload }) {
      state.current = payload;
    },
  },
});

export { actions, reducer };
