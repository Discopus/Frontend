import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  University,
  UniversityForRegistration,
  UnivesityTags,
} from "../models/University";

export const universityAPI = createApi({
  reducerPath: "universityAPI",
  tagTypes: ["University"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
  }),
  endpoints: (builder) => ({
    getCompanies: builder.query<University[], void>({
      query: () => ({
        url: "univecities/getAll",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MzJjMzBkNy1kNmYzLTQyN2EtOTMzYy1iODliN2Q0YzRiMTkiLCJpYXQiOjE2Njk5ODA1NTY4MDd9.zN2bIuNUVI4oNdGDiO4UBKxAlZfoefvFVDpzLqI1shA",
        },
      }),
      providesTags: (result) => ["University"],
    }),
    adduniversity: builder.mutation<University, UniversityForRegistration>({
      query: (university) => ({
        method: "POST",
        url: "univecities/create",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MzJjMzBkNy1kNmYzLTQyN2EtOTMzYy1iODliN2Q0YzRiMTkiLCJpYXQiOjE2Njk5ODA1NTY4MDd9.zN2bIuNUVI4oNdGDiO4UBKxAlZfoefvFVDpzLqI1shA",
        },
        body: university,
      }),
      invalidatesTags: ["University"],
    }),
  }),
});
