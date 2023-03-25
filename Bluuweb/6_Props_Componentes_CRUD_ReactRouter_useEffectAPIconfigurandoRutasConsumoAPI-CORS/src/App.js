import React from "react";
import { //Antes se importaba el Switch ahora es Routes
  BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Inicio from "./components/Inicio"
import Contactenos from "./components/Contactenos"
import ConsumoAPI from "./components/ConsumoAPI"
import Crud from "./components/CRUD/Crud"
import UsoProps from "./components/Hook-props/UsoProps"
import RouteParametrosApi from "./components/Router-con-parametro-api/RouteParametrosApi"
import User from "./components/Router-con-parametro-api/User";

import "./App.css"

function App() {
  return (
    
    <Router> {/* Para utilizar router todo se encierra en este */}
      <div className="container mt-5">
        
        <div className="btn-group">
          <Link to="/" className="btn btn-warning">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-warning">
            Conctacto
          </Link>
          <Link to="/props" className="btn btn-warning">
            Uso de props
          </Link>
          <Link to="/crud" className="btn btn-warning">
            CRUD
          </Link>
          {/* NavLink cuando ingrese a esta ruta quede resalda de un color mas intenso */}
          <NavLink to="/consumoapi" className="btn btn-warning" activeClassName="active">
            useEffect Consumiendo API placeholder
          </NavLink>
          <NavLink to="/consumoapiparametro" className="btn btn-warning">
            rutas con parametro Consumiendo API age of empires
          </NavLink>
        </div>

        <Routes>  {/* Para mostrar el contenido dinamico de la ruta */}
          {/* Llamar el comonente o contenido dinamico y el path da la ruta donde esta */}
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/contacto" element={<Contactenos />} /> 
          <Route exact path="/consumoapi" element={<ConsumoAPI />} />
          <Route exact path="/crud" element={<Crud />} />
          <Route exact path="/props" element={<UsoProps />} />
          <Route exact path="/consumoapiparametro" element={<RouteParametrosApi />} />
          <Route exact path="/consumoapiparametro/:id" element={<User />}> 
            Civilización 
          </Route>
        </Routes>

      </div>
    </Router>
  );
}


export default App;
