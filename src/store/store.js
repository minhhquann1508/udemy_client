import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoriesReducer from './reducers/categoriesReducer';
import authReducer from './reducers/authReducer';

export const store = configureStore({
  reducer: {
    categoriesReducer,
    authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
