import { createSlice } from "@reduxjs/toolkit";
import { fetchConfiguration } from "../actions";

const initialState = {
  configuration: {},
  status: "idle",
  error: null,
};

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfiguration.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConfiguration.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.configuration = action.payload;
      })
      .addCase(fetchConfiguration.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default configurationSlice.reducer;
