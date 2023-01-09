import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Project, ProjectForRegistration } from "../models/Project";
import { RootState } from "../store";

export const projectAPI = createApi({
  reducerPath: "projectAPI",
  tagTypes: ["Project"],
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
    getProjects: builder.query<Project[], void>({
      query: () => ({
        url: "projects/getAll",
      }),
      providesTags: (result) => ["Project"],
    }),
    getProject: builder.query<Project, string>({
      query: (id) => ({
        url: `projects/getById/${id}`,
      }),
      providesTags: (result) => ["Project"],
    }),
    addProject: builder.mutation<Project, ProjectForRegistration>({
      query: (project) => ({
        method: "POST",
        url: "projects/create",
        body: project,
      }),
      invalidatesTags: ["Project"],
    }),
    updateProject: builder.mutation<Project, Project>({
      query: (project) => ({
        method: "PUT",
        url: `projects/update/${project.id}`,
        body: project,
      }),
      invalidatesTags: ["Project"],
    }),
    deleteProject: builder.mutation<Project, string>({
      query: (id) => ({
        method: "DELETE",
        url: `projects/delete/${id}`,
        body: { id: id },
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});
