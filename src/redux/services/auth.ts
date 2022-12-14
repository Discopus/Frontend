import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UserForLogin } from "../models/User";
import { RootState } from "../store";

type UserResponse = {
  token: string;
  user: Omit<User, "password">;
};

export const authAPI = createApi({
  reducerPath: "authAPI",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/users/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, UserForLogin>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
