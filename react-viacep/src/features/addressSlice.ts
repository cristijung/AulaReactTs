import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AddressState {
  street: string;
  neighborhood: string;
  city: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AddressState = {
  street: '',
  neighborhood: '',
  city: '',
  status: 'idle',
  error: null,
};

export const fetchAddress = createAsyncThunk(
  'address/fetchAddress',
  async (cep: string) => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  }
);

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.street = action.payload.logradouro;
        state.neighborhood = action.payload.bairro;
        state.city = action.payload.localidade;
        state.error = null;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Ocorreu um erro ao buscar o endereço.';
      });
  },
});

export default addressSlice.reducer;
