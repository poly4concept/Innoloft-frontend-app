import { configureStore } from "@reduxjs/toolkit";
import configurationReducer from "./slice/configurationSlice";
import productReducer from "./slice/productSlice";
import trlReducer from "./slice/trlSlice";
export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    product: productReducer,
    trl: trlReducer,
  },
});
