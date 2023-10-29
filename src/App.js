import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import userpool from './userpool';
import './App.css';

//https://medium.com/@adi2308/aws-cognito-with-reactjs-for-authentication-c8916b873ccb
//https://github.com/dubeyaditya6232/awscognito/blob/main/src/userpool.js
//npm install --save react-router-dom
//npm install @mui/material @emotion/react @emotion/styled
//npm install --save amazon-cognito-auth-js
//npm install --save amazon-cognito-identity-js
//https://medium.com/@elijah.o.george/aws-api-gateway-how-to-resolve-the-cors-missing-allow-header-error-4d225d2686fe
//https://docs.aws.amazon.com/es_es/cognito/latest/developerguide/authentication.html

function App() {

  useEffect(()=>{
    let user=userpool.getCurrentUser();
      if(user){
        <Navigate to="/dashboard" replace />
      }
  },[]);

  return (
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
