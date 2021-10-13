import { configureStore } from "@reduxjs/toolkit";
import { reducer as libraryState } from "../redux/libraryState";
import { reducer as apiState } from "../redux/apiState";

export const store = configureStore({
  reducer: {
    library: libraryState,
    api: apiState,
  },
});
