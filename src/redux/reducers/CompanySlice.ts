import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Company } from "../models/Company";
import { fetchCompanies } from "./ActionCreator";

interface CompanyState {
  companies: Company[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CompanyState = {
  companies: [],
  isLoading: false,
  error: null,
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCompanies.fulfilled,
        (state, action: PayloadAction<Company[]>) => {
          state.isLoading = false;
          state.companies = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchCompanies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

export default companySlice.reducer;
