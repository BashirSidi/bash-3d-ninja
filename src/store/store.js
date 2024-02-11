import { configureStore } from '@reduxjs/toolkit';
import fileTypesReducer from './slices/fileTypeSlice';

export const store = configureStore({
  reducer: {
    fileTypes: fileTypesReducer,
  },
});