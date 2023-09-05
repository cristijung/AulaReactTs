import { configureStore } from '@reduxjs/toolkit';
import catBreedReducer from './features/catBreed/catBreedSlice';

export const store = configureStore({
  reducer: {
    catBreed: catBreedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
