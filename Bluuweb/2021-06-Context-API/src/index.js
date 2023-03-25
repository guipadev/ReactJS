import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import UserProvider from './context/UserProvider'
import AppRoutes from './routes/AppRoutes';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      {/* 
        se envuelve en UserProvider para que tenga acceso al elemento 
        asi los elementos App, Inicio, Blog, Post, Contacto va a poder llamar a
        user, signIn, signOut
      */}
        <AppRoutes />
      </UserProvider>    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
