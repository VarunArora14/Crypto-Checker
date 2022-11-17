import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { newsApi } from "../services/newsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  // add a middleware else error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([cryptoApi.middleware, newsApi.middleware]),
});

// have to pass like function configureStore({ reducer: {} }) because we have to pass an object with a reducer property and
// the value of that property is an empty object right now
