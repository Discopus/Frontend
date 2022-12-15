import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Company, CompanyForRegistration } from "../models/Company";
import { RootState } from "../store";

export const companyAPI = createApi({
  reducerPath: "companyAPI",
  tagTypes: ["Company"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], void>({
      query: () => ({
        url: "companies/getAll",
      }),
      providesTags: (result) => ["Company"],
    }),
    addCompany: builder.mutation<Company, CompanyForRegistration>({
      query: (company) => ({
        method: "POST",
        url: "companies/create",
        body: company,
      }),
      invalidatesTags: ["Company"],
    }),
    updateCompany: builder.mutation<Company, Company>({
      query: (company) => ({
        method: "PUT",
        url: `companies/update/${company.id}`,
        body: company,
      }),
      invalidatesTags: ["Company"],
    }),
    deleteCompany: builder.mutation<Company, string>({
      query: (id) => ({
        method: "DELETE",
        url: `companies/delete/${id}`,
        body: { id: id },
      }),
      invalidatesTags: ["Company"],
    }),
  }),
});
