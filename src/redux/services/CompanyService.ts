import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Company, CompanyForRegistration } from "../models/Company";

export const companyAPI = createApi({
  reducerPath: "companyAPI",
  tagTypes: ["Company"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
  }),
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], void>({
      query: () => ({
        url: "companies/getAll",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MzJjMzBkNy1kNmYzLTQyN2EtOTMzYy1iODliN2Q0YzRiMTkiLCJpYXQiOjE2Njk5ODA1NTY4MDd9.zN2bIuNUVI4oNdGDiO4UBKxAlZfoefvFVDpzLqI1shA",
        },
      }),
      providesTags: (result) => ["Company"],
    }),
    addCompany: builder.mutation<Company, CompanyForRegistration>({
      query: (company) => ({
        method: "POST",
        url: "companies/create",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MzJjMzBkNy1kNmYzLTQyN2EtOTMzYy1iODliN2Q0YzRiMTkiLCJpYXQiOjE2Njk5ODA1NTY4MDd9.zN2bIuNUVI4oNdGDiO4UBKxAlZfoefvFVDpzLqI1shA",
        },
        body: company,
      }),
      invalidatesTags: ["Company"],
    }),
    updateCompany: builder.mutation<Company, Company>({
      query: (company) => ({
        method: "PUT",
        url: `companies/update/${company.id}`,
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MzJjMzBkNy1kNmYzLTQyN2EtOTMzYy1iODliN2Q0YzRiMTkiLCJpYXQiOjE2Njk5ODA1NTY4MDd9.zN2bIuNUVI4oNdGDiO4UBKxAlZfoefvFVDpzLqI1shA",
        },
        body: company,
      }),
      invalidatesTags: ["Company"],
    }),
    deleteCompany: builder.mutation<Company, string>({
      query: (id) => ({
        method: "DELETE",
        url: `companies/delete/${id}`,
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MzJjMzBkNy1kNmYzLTQyN2EtOTMzYy1iODliN2Q0YzRiMTkiLCJpYXQiOjE2Njk5ODA1NTY4MDd9.zN2bIuNUVI4oNdGDiO4UBKxAlZfoefvFVDpzLqI1shA",
        },
        body: { id: id },
      }),
      invalidatesTags: ["Company"],
    }),
  }),
});
