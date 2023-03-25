import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Views
import App from '../App';
import Inicio from '../pages/Inicio';
import Blog from '../pages/Blog';
import Contacto from '../pages/contacto';
import NoEncontrada from '../pages/NoEncontrada';
import Post from '../pages/Post';
import RutaProtegida from '../pages/RutaProtegida';


import VerificarUsuario from '../components/VerificarUsuario';


const AppRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Inicio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Post />} />
            <Route path="contacto" element={<Contacto />} />

            <Route 
              path="protegida" 
              element={
                <VerificarUsuario>
                  <RutaProtegida />
                </VerificarUsuario>
              } 
            />
            
            <Route path="*" element={<NoEncontrada />} />
          </Route>        
        </Routes>
  )
}

export default AppRoutes