import { ErrorType, Product } from '@/types/category';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductById = createAsyncThunk('category/fetchProductById', (categoryId: string | string[]) => {
  return axios
    .get<Product>(`https://api.escuelajs.co/api/v1/categories/${categoryId}`)
    .then((res) => res.data)
    .catch((error: ErrorType) => {
      console.log('Error fetching category by ID:', error);
      return error;
    });
});

const initialState = {
  selectedProduct: null as Product | null,
  isLoading: false,
  error: null as ErrorType | null,
};

const SelectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.selectedProduct = null;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.selectedProduct = action.payload as Product;
      state.error = null;
      state.isLoading = false;
    });

    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error as ErrorType;
      state.selectedProduct = null;
    });
  },
});

export default SelectedProductSlice.reducer;
