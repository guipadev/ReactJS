import React from 'react'
import { Link } from 'react-router-dom';
import './NoEncontrada.css'

const NoEncontrada = () => {
    return (
        <div class="container no-encontrada">
            <p class="error"> 404
              <span class="message">Página 'url' no encontrada</span>
              <Link to="/">
                  Inicio
              </Link>
            </p>
            
        </div>
    )
}

export default NoEncontrada


