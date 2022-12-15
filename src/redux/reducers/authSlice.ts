import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";
import { authAPI } from "../services/auth";

let user = null;
let userToken = null;
if (typeof localStorage !== "undefined") {
  const userString = localStorage.getItem("user");
  user = userString !== null && userString !== "undefined" ? JSON.parse(userString) : null;

  userToken = localStorage.getItem("token") !== null ? localStorage.getItem("token") : null;
}


type AuthState = {
  user: Omit<User, "password"> | null;
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { token: userToken, user: user } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        localStorage.setItem("token", payload.token);
        localStorage.setItem("user", JSON.stringify(payload.user));
      }
    );
  },
});

export default slice.reducer;
