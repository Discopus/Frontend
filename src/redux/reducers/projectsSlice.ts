import { createSlice } from "@reduxjs/toolkit";
import { Project, ProjectForRegistration } from "../models/Project";
import { projectAPI } from "../services/ProjectService";

type ProjectState = {
    projects: Project[];
};

export const projectsSlice = createSlice({
    name: "projects",
    initialState: { projects: [] } as ProjectState,
    reducers: {
        createProject: (state, action) => {
            state.projects.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            projectAPI.endpoints.addProject.matchFulfilled,
            (state, { payload }) => {
                state.projects.push(payload);
            }
        );
    },
});

export const { createProject } = projectsSlice.actions;

export default projectsSlice.reducer;