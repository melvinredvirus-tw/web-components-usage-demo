import { describe, it, expect, vi, beforeEach } from 'vitest';
import reducer, { fetchCategories } from '@/redux/categorySlice';
import type { Category, ErrorType } from '@/types/category';
import axios from 'axios';
import { AnyAction } from '@reduxjs/toolkit';

vi.mock('axios');
const mockedAxios = axios as unknown as { get: ReturnType<typeof vi.fn> };

describe('categorySlice', () => {
  const initialState = {
    categories: [],
    isLoading: false,
    error: null,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should handle fetchCategories.pending', () => {
    const action = { type: fetchCategories.pending.type };
    const state = reducer(initialState, action);
    expect(state.isLoading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle fetchCategories.fulfilled with categories', () => {
    const categories: Category[] = [
      { id: 1, name: 'cat1', image: '', slug: '/cat1' },
      { id: 2, name: 'cat2', image: '', slug: '/cat2' },
    ];
    const action: AnyAction = { type: fetchCategories.fulfilled.type, payload: categories };
    const state = reducer({ ...initialState, isLoading: true }, action);
    expect(state.categories).toEqual(categories);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should handle fetchCategories.fulfilled with error payload', () => {
    const error: ErrorType = {
      message: 'error',
      error: '',
      statusCode: 0,
    };
    const action: AnyAction = { type: fetchCategories.fulfilled.type, payload: error };
    const state = reducer({ ...initialState, isLoading: true }, action);
    expect(state.categories).toEqual([]);
    expect(state.isLoading).toBe(false);
    expect(state.error).toEqual(error);
  });

  it('should handle fetchCategories.rejected', () => {
    const error: ErrorType = {
      message: 'failed',
      error: '',
      statusCode: 0,
    };
    const action: AnyAction = { type: fetchCategories.rejected.type, error };
    const state = reducer({ ...initialState, isLoading: true }, action);
    expect(state.categories).toEqual([]);
    expect(state.isLoading).toBe(false);
    expect(state.error).toEqual(error);
  });

  it('fetchCategories thunk dispatches fulfilled on success', async () => {
    const categories: Category[] = [{ id: 1, name: 'cat1', image: '', slug: '/cat1' }];
    mockedAxios.get = vi.fn().mockResolvedValue({ data: categories });
    const thunk = fetchCategories();
    const dispatch = vi.fn();
    const getState = vi.fn();
    await thunk(dispatch, getState, undefined);
    expect(mockedAxios.get).toHaveBeenCalled();
  });

  it('fetchCategories thunk dispatches fulfilled with error on failure', async () => {
    const error: ErrorType = {
      message: 'network error',
      error: '',
      statusCode: 0,
    };
    mockedAxios.get = vi.fn().mockRejectedValue(error);
    const thunk = fetchCategories();
    const dispatch = vi.fn();
    const getState = vi.fn();
    await thunk(dispatch, getState, undefined);
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
