import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { User, UserForRegistration } from "../models/User";
import { RootState } from "../store";

export const userAPI = createApi({
  reducerPath: "userAPI",
  tagTypes: ["User"],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/users",
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
        url: "/getAll",
      }),
      providesTags: (result) => ["User"],
    }),
    getUserById: builder.query<User, string>({
      query: (id) => ({
        url: `/getById/${id}`,
      }),
      providesTags: (result) => ["User"],
    }),
    addUser: builder.mutation<User, UserForRegistration>({
      query: (user) => ({
        method: "POST",
        url: "/create",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
