import { createSlice } from "@reduxjs/toolkit";
import { fetchTrls } from "../actions";

const trlSlice = createSlice({
  name: "trls",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrls.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default trlSlice.reducer;
