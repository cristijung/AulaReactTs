import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  [x: string]: any;
  value: number;
  value1: number;
  value2: number;
}

const initialState: CalculatorState = {
  value: 0,
  value1: 0,
  value2: 0,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    add: (state, action: PayloadAction<{ value1: number; value2: number }>) => {
      state.value = action.payload.value1 + action.payload.value2;
    },
    subtract: (state, action: PayloadAction<{ value1: number; value2: number }>) => {
      state.value = action.payload.value1 - action.payload.value2;
    },
    multiply: (state, action: PayloadAction<{ value1: number; value2: number }>) => {
      state.value = action.payload.value1 * action.payload.value2;
    },
    divide: (state, action: PayloadAction<{ value1: number; value2: number }>) => {
      if (action.payload.value2 !== 0) {
        state.value = action.payload.value1 / action.payload.value2;
      } else {
        state.value = 0; // Tratar a divisão por zero
      }
    },
  },
});

export const { setValue, add, subtract, multiply, divide } = calculatorSlice.actions;

export default calculatorSlice.reducer;
export type RootState = ReturnType<typeof calculatorSlice.reducer>;
