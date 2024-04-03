import axios from "redaxios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const APP_ID = import.meta.env.VITE_APP_ID ?? 1;

export const fetchConfiguration = createAsyncThunk(
  "configuration/fetchConfiguration",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/configuration/${APP_ID}/`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/6781/`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data) => {
    try {
      const response = await axios.put(`${BASE_URL}/product/6781/`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchTrls = createAsyncThunk("trls/fetchTrls", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trl/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
