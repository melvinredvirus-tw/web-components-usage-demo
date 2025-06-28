import { type ErrorType, type Category } from '@/types/category';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoryById = createAsyncThunk('category/fetchCategoryById', (categoryId: string | string[]) => {
  return axios
    .get<Category>(`https://api.escuelajs.co/api/v1/categories/${categoryId}`)
    .then((res) => res.data)
    .catch((error: ErrorType) => {
      console.log('Error fetching category by ID:', error);
      return error;
    });
});

const initialState = {
  selectedCategory: null as Category | null,
  isLoading: false,
  error: null as ErrorType | null,
};

const SelectedCategorySlice = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.selectedCategory = null;
    });

    builder.addCase(fetchCategoryById.fulfilled, (state, action) => {
      state.selectedCategory = action.payload as Category;
      state.error = null;
      state.isLoading = false;
    });

    builder.addCase(fetchCategoryById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error as ErrorType;
      state.selectedCategory = null;
    });
  },
});

export default SelectedCategorySlice.reducer;
