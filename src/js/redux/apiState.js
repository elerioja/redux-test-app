import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "api",
  initialState: {
    current: [],
    isLoading: false,
  },
  reducers: {
    fetchPhotos(state, { payload }) {
      state.current = payload;
      state.isLoading = true;
    },
    photosReceived(state, { payload }) {
      state.current = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
