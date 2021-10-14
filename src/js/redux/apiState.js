import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "api",
  initialState: {
    photos: [],
    isLoading: false,
  },
  reducers: {
    fetchPhotos(state) {
      state.isLoading = true;
    },
    photosReceived(state, { payload }) {
      state.photos = payload.photos;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
