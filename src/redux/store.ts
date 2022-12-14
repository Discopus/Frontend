import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companyReducer from "./reducers/CompanySlice";
import { companyAPI } from "./services/CompanyService";

const rootReducer = combineReducers({
  companyReducer,
  [companyAPI.reducerPath]: companyAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(companyAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
