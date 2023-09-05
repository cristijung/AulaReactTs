import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CatBreedState {
  breeds: any[];
  images: any[];
}

const initialState: CatBreedState = {
  breeds: [],
  images: [],
};

const catBreedSlice = createSlice({
  name: 'catBreed',
  initialState,
  reducers: {
    setBreeds: (state, action: PayloadAction<any[]>) => {
      state.breeds = action.payload;
    },
    setImages: (state, action: PayloadAction<any[]>) => {
      state.images = action.payload;
    },
  },
});

export const { setBreeds, setImages } = catBreedSlice.actions;

export default catBreedSlice.reducer;
