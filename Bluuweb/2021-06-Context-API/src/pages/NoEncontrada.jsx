import React from 'react'
import { Link } from 'react-router-dom';
import './NoEncontrada.css'

const NoEncontrada = () => {
    return (
        <div className="container no-encontrada">
            <p className="error"> 404
              <span className="message">Página URL no encontrada</span>
              <Link to="/">
                  Inicio
              </Link>
            </p>
            
        </div>
    )
}

export default NoEncontrada


