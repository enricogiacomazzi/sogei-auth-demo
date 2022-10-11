import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { LoginResult } from './models/loginResult';

function App() {

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const hasTokens = accessToken && refreshToken;


  const initalState: LoginResult | null = hasTokens ? { accessToken, refreshToken } : null;

  const [tokens, setTokens] = useState<LoginResult | null>(initalState);
  const isLogged = useMemo(() => !!tokens && !!tokens.accessToken, [tokens]); 

  const login = (res: LoginResult) => {
    localStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    setTokens(res);
  }

  return isLogged ? <Home/> : <Login OnLogin={res => login(res)}/>;
}

export default App;
