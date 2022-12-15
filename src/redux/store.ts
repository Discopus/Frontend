import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import { authAPI } from "./services/auth";
import { companyAPI } from "./services/CompanyService";

const rootReducer = combineReducers({
  [companyAPI.reducerPath]: companyAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  auth: authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        companyAPI.middleware,
        authAPI.middleware,
      ]),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
