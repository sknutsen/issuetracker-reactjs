import React, { useEffect, useState } from 'react';
import './style/App.css';
import { Routes } from './Routes';
import { getAccessToken } from './accessToken';
import { refreshToken } from './handlers/refreshToken';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (getAccessToken() !== "") {
      refreshToken().then(async response => {
        setLoading(false);
      });
    }
    
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
