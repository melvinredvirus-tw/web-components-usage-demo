import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import selectedCategoryReducer from './selectedCategory';
import featuredProductsReducer from './featuredProducts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    selectedCategory: selectedCategoryReducer,
    featuredProducts: featuredProductsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
