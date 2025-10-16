import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import productReducer from "./product";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  product: productReducer,
  ui: uiReducer,
});

const additionalMiddlewares = [];

if (process.env.NODE_ENV === "development") {
  additionalMiddlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(additionalMiddlewares),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
