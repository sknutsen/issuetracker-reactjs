import React, { useState } from 'react';
import './style/App.css';
import { Routes } from './Routes';

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch(`${authUrl}/refresh-token`, {
  //     method: "POST", 
  //     headers: {
  //         'Content-Type': 'application/json; charset=UTF-8', 
  //         'authorization': `bearer ${getAccessToken()}`
  //     }, 
  //     mode: "cors", 
  //     credentials: "include"
  //   }).then(async response => {
  //     const { accessToken } = await response.json();
  //     setAccessToken(accessToken);
  //     setLoading(false);
  //   });
  //   setLoading(false);
  // }, []);

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
