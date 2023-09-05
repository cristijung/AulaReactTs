import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress } from './features/addressSlice';
import { RootState } from './store/store';
import { ThunkDispatch } from 'redux-thunk';

function App() {
  const dispatch: ThunkDispatch<RootState, any, any> = useDispatch();
  const { street, neighborhood, city, status, error } = useSelector(
    (state: RootState) => state.address
  );

  const [cep, setCep] = useState('');
  
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleSearch = () => {
    if (cep.trim() !== '') {
      dispatch(fetchAddress(cep));
    }
  };

  return (
    <div>
      <h1>Consulta de CEP</h1>
      <input
        type="text"
        placeholder="Digite um CEP"
        value={cep}
        onChange={handleCepChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      {status === 'loading' ? (
        <p>Carregando...</p>
      ) : status === 'failed' ? (
        <p>{error}</p>
      ) : (
        <>
          <p>Rua: {street}</p>
          <p>Bairro: {neighborhood}</p>
          <p>Cidade: {city}</p>
        </>
      )}
    </div>
  );
}

export default App;
