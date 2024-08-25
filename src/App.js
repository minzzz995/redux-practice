import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from  "./component/Box";

function App() {

  // useSelector는 argu를 함수(state(in store))로 받음
  const count = useSelector(state=>state.count);
  let id = useSelector(state=>state.id);
  let password = useSelector(state=>state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: {num:5} });
  };

  const decrease =() => {
    dispatch({ type: "DECREASE", payload: {num:1} });
  }

  const login = () => {
    dispatch({ type: "LOGIN", payload: {id:"jmj", password: "1234"} });
  };

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>+증가</button>
      <button onClick={decrease}>-감소</button>
      <button onClick={login}>login</button>
      <Box />
    </div>
  );
}

export default App;
