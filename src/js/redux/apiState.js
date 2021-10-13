import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "api",
  initialState: {
    current: [],
  },
  reducers: {
    fetchPhotos(state, { payload }) {
      state.current = payload;
    },
  },
});

export { actions, reducer };
