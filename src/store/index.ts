import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CountrySearchReducer from "./countrySearch.slice";

const rootReducer = combineReducers({
  country: CountrySearchReducer,
});
const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [...getDefaultMiddleware()];
  return middlewareList;
};
const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
