import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoriesReducer from './reducers/categoriesReducer';
import authReducer from './reducers/authReducer';
import teacherReducer from './reducers/teacherReducer';

export const store = configureStore({
  reducer: {
    categoriesReducer,
    authReducer,
    teacherReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
