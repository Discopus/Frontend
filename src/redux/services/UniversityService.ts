import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { University, UniversityForRegistration } from "../models/University";
import { RootState } from "../store";

export const universityAPI = createApi({
  reducerPath: "universityAPI",
  tagTypes: ["University"],
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
