import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CountryReducer from "./country.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'country',
  storage: storage,
};

const rootReducer = combineReducers({
  country: CountryReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
  ];

  return middlewareList;
};

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
  reducer: persistedReducer,
});

export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
