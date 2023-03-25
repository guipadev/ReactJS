import React from "react";
import { NavLink, Link } from "react-router-dom";
//importe los estilos de navegacion 👇
import "../../App.css";

/*
 *Ahora, creamos el componente de la barra de navegación. 
 *Primero, importe 2 componentes de react-router-dom. 
 *Luego, unas clases conbootstrap que tendran unos estilos de la barra de navegación: 👇
*/

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <Link to="/" className="navbar-brand fs-3 ubuntu">
                    Ricky & Morty
                    <span className="text-primary">
                        WiKi
                    </span>
                </Link>

                <style jsx>
                {`
                    button[aria-expanded="false"] > .close {
                        display: none;
                    }
                
                    button[aria-expanded="true"] > .open {
                        display: none;
                    }
                `}
                </style>
                {/* código para generar nuestro menú de hamburguesas receptivo 👇*/}     
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <style jsx>
                        {`
                            button[aria-expanded="false"] > .close{
                                display: none;
                            }
                            button[aria-expanded="true"] > .open {
                                display: none;
                            }
                        `}
                    </style>
                    <span class="fas fa-bars open text-dark"></span>
                    <span class="fas fa-times close text-dark"></span>
                </button>
                
                {/* generar nuestros enlaces de la barra de navegación en los que se puede hacer clic */}
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav fs-5">
                        <NavLink activeClassName="active" to="/" className="nav-link">
                            Characters
                        </NavLink>
                        <NavLink to="/episodes" className="nav-link">
                            Episode
                        </NavLink>
                        <NavLink to="/location" className="nav-link">
                            Location
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
      
    );
};
 
export default Navbar;