import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import { authAPI } from "./services/auth";
import { companyAPI } from "./services/CompanyService";
import { universityAPI } from "./services/UniversityService";
import { userAPI } from "./services/UserService";

const rootReducer = combineReducers({
  [companyAPI.reducerPath]: companyAPI.reducer,
  [universityAPI.reducerPath]: universityAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  auth: authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        companyAPI.middleware,
        universityAPI.middleware,
        authAPI.middleware,
        userAPI.middleware,
      ]),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
