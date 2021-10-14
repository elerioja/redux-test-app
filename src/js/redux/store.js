import { configureStore } from "@reduxjs/toolkit";
import { reducer as libraryState } from "../redux/libraryState";
import { reducer as apiState } from "../redux/apiState";

import { createEpicMiddleware } from "redux-observable";
import createFetchApi from "../fetch/fetchApi";
import config from "../config";
import epics from "../epics/index";

export default function createStore() {
  const fetchApiWithBaseConfig = createFetchApi(fetch, config);

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      fetchApi: (searchQuery) => fetchApiWithBaseConfig(searchQuery),
    },
  });

  const store = configureStore({
    reducer: {
      library: libraryState,
      api: apiState,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([epicMiddleware]),
  });

  epicMiddleware.run(epics);
  return store;
}
