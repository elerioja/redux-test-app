import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "api",
  initialState: {
    photos: [],
    isLoading: false,
    inputValue: "",
  },
  reducers: {
    fetchPhotos(state) {
      state.isLoading = true;
    },
    photosReceived(state, { payload }) {
      state.photos = payload.photos;
      state.isLoading = false;
    },
    updateInput(state, { payload }) {
      state.inputValue = payload;
    },
    performSearch(state) {
      state.isLoading = true;
    },
    searchPerformed(state, { payload }) {
      state.photos = payload.photos;
      state.inputValue = "";
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
