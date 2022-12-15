import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";
import { authAPI } from "../services/auth";

type AuthState = {
  user: Omit<User, "password"> | null;
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { token: null, user: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});

export default slice.reducer;
