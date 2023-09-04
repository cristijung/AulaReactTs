import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, subtract, multiply, divide, RootState, setValue } from '../features/calculatorSlice';

const Calculator: React.FC = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.calculator);
  const [inputValue1, setInputValue1] = useState<number>(0);
  const [inputValue2, setInputValue2] = useState<number>(0);

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(Number(event.target.value));
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(Number(event.target.value));
  };

  const handleAdd = () => {
    dispatch(add({ value1: inputValue1, value2: inputValue2 }));
  };

  const handleSubtract = () => {
    dispatch(subtract({ value1: inputValue1, value2: inputValue2 }));
  };

  const handleMultiply = () => {
    dispatch(multiply({ value1: inputValue1, value2: inputValue2 }));
  };

  const handleDivide = () => {
    dispatch(divide({ value1: inputValue1, value2: inputValue2 }));
  };

  return (
    <div>
      <h1>Calculadora Simples</h1>
      <div>
        <input type="number" value={inputValue1} onChange={handleInputChange1} />
        <input type="number" value={inputValue2} onChange={handleInputChange2} />
      </div>
      <br />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <br />
      <h2>Resultado: {value}</h2>
      <button onClick={() => dispatch(setValue(0))}>Limpar</button>
    </div>
  );
};

export default Calculator;
