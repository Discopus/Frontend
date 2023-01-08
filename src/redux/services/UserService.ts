import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { User, UserForRegistration, UserWithoutPassword } from "../models/User";
import { RootState } from "../store";

export const userAPI = createApi({
  reducerPath: "userAPI",
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
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: "getAll",
      }),
      providesTags: (result) => ["User"],
    }),
    getUserById: builder.query<User, string>({
      query: (id) => ({
        url: `getById/${id}`,
      }),
      providesTags: (result) => ["User"],
    }),
    addUser: builder.mutation<User, UserForRegistration>({
      query: (user) => ({
        method: "POST",
        url: "register",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation<User, UserWithoutPassword>({
      query: (user) => ({
        method: "PUT",
        url: "update",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
