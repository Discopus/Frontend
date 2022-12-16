import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { University, UniversityForRegistration } from "../models/University";
import { RootState } from "../store";

export const universityAPI = createApi({
  reducerPath: "universityAPI",
  tagTypes: ["University"],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/universities/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCompanies: builder.query<University[], void>({
      query: () => ({
        url: "getAll",
      }),
      providesTags: (result) => ["University"],
    }),
    adduniversity: builder.mutation<University, UniversityForRegistration>({
      query: (university) => ({
        method: "POST",
        url: "create",
        body: university,
      }),
      invalidatesTags: ["University"],
    }),
  }),
});
