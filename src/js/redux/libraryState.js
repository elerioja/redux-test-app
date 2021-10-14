import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "library",
  initialState: {
    photos: [],
    isLoading: false,
  },
  reducers: {
    addToLibrary(state, { payload }) {
      state.photos = [...state.photos, payload];
      state.isLoading = true;
    },
    removeFromLibrary(state, { payload }) {
      state.photos = state.photos.filter((photo) => {
        return photo.id !== payload.id;
      });
      state.isLoading = true;
    },
    addedToLibrary(state) {
      state.isLoading = false;
    },
    removedFromLibrary(state) {
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
