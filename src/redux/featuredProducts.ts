import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { type ErrorType, type Product } from '@/types/category';

export const fetchFeaturedProducts = createAsyncThunk('category/fetchCategories', () => {
  return axios
    .get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .then((res) => res.data)
    .catch((err: ErrorType) => err);
});

const initialState = {
  featuredProduct: [] as Product[],
  isLoading: false,
  error: null as ErrorType | null,
};

const FeaturedProductsSlice = createSlice({
  name: 'featuredSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.featuredProduct = action.payload;
        state.error = null;
      } else {
        state.featuredProduct = [];
        state.error = action.payload as ErrorType;
      }
      state.isLoading = false;
    });

    builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error as ErrorType;
      state.featuredProduct = [];
    });
  },
});

export default FeaturedProductsSlice.reducer;
