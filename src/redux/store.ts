import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import { authAPI } from "./services/auth";
import { companyAPI } from "./services/CompanyService";
import { projectAPI } from "./services/ProjectService";

const rootReducer = combineReducers({
  [companyAPI.reducerPath]: companyAPI.reducer,
  [projectAPI.reducerPath]: projectAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  auth: authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        companyAPI.middleware,
        projectAPI.middleware,
        authAPI.middleware,
      ]),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
