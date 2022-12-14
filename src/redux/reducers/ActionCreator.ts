import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Company } from "../models/Company";

// export const fetchCompanies = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(companySlice.actions.companyFetching());
//     const response = await axios.get<Company[]>(
//       "http://localhost:4000/api/companies/getAll",
//       {
//         headers: {
//           Authorization:
//             "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MzJjMzBkNy1kNmYzLTQyN2EtOTMzYy1iODliN2Q0YzRiMTkiLCJpYXQiOjE2Njk5ODA1NTY4MDd9.zN2bIuNUVI4oNdGDiO4UBKxAlZfoefvFVDpzLqI1shA",
//         },
//       }
//     );
//     dispatch(companySlice.actions.companyFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(companySlice.actions.companyFetchingError(error.message));
//   }
// };

export const fetchCompanies = createAsyncThunk(
  "company/fetchAll",
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get<Company[]>(
        "http://localhost:4000/api/companies/getAll",
        {
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MzJjMzBkNy1kNmYzLTQyN2EtOTMzYy1iODliN2Q0YzRiMTkiLCJpYXQiOjE2Njk5ODA1NTY4MDd9.zN2bIuNUVI4oNdGDiO4UBKxAlZfoefvFVDpzLqI1shA",
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
