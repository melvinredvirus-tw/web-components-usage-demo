import type { Category, ErrorType } from '@/types/category';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  categories: [] as Category[],
  isLoading: false,
  error: null as ErrorType | null,
};

export const fetchCategories = createAsyncThunk('category/fetchCategories', () => {
  return axios
    .get<Category[]>('https://api.escuelajs.co/api/v1/categories')
    .then((res) => res.data)
    .catch((error: ErrorType) => error);
});

const CategorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.categories = action.payload;
        state.error = null;
      } else {
        state.categories = [];
        state.error = action.payload as ErrorType;
      }
      state.isLoading = false;
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error as ErrorType;
      state.categories = [];
    });
  },
});

export default CategorySlice.reducer;
