import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        
        <NavLink to="/" className="btn btn-outline-primary">
          INICIO
        </NavLink>
        <NavLink to="/estado" className="btn btn-outline-primary">
            ESTADOS
        </NavLink>
        <NavLink to="/renderizadoCondicional" className="btn btn-outline-primary">
            RENDERIZADO CONDICIONAL
        </NavLink>
        <NavLink to="/renderizadoElementos" className="btn btn-outline-primary">
            REDERIZADO DE ELEMENTOS
        </NavLink>
        <NavLink to="/EventosES6" className="btn btn-outline-primary">
            EVENTOS ES6
        </NavLink>
        <NavLink to="/EventosES7" className="btn btn-outline-primary">
            EVENTOS ES7
        </NavLink>
        <NavLink to="/MasSobreEventos" className="btn btn-outline-primary">
            MAS SOBRE EVENTOS
        </NavLink>
        <NavLink to="/ComunicacionComponentes" className="btn btn-outline-primary">
            COMUNICACION DE COMPONENTES
        </NavLink>
        <NavLink to="/CicloVida" className="btn btn-outline-primary">
            CICLO DE VIDA COMPONENTES
        </NavLink>
        <NavLink to="/AjaxApis" className="btn btn-outline-primary">
            AJAX APIS
        </NavLink>
        <NavLink to="/ContadorHooks" className="btn btn-outline-primary">
            HOOK CONTADOR - useState
        </NavLink>
        <NavLink to="/ScrollHooks" className="btn btn-outline-primary">
            HOOK SCROLL - useState - useEffect
        </NavLink>
        <NavLink to="/RelojHooks" className="btn btn-outline-primary">
            HOOK RELOJ - useState - useEffect
        </NavLink>
        <NavLink to="/AjaxHooks" className="btn btn-outline-primary">
            HOOK AJAX - useState - useEffect
        </NavLink>
        <NavLink to="/HooksPersonalizados" className="btn btn-outline-primary">
            HOOK PERSONALIZADO - Custom Hooks
        </NavLink>
        <NavLink to="/Referencias" className="btn btn-outline-primary">
            COMPONENTES POR REFERENCIAS
        </NavLink>
        <NavLink to="/Formularios" className="btn btn-outline-primary">
            FORMULARIOS CON VALIDACION
        </NavLink>
        <NavLink to="/Estilos" className="btn btn-outline-primary">
            ESTILOS CSS
        </NavLink>
        <NavLink to="/ComponentesEstilizados" className="btn btn-outline-primary">
            COMPONENTES ESTILIZADOS - STYLED COMPONENTS 💅
        </NavLink>


      </div>
    </nav>
  );
};

export default Navbar;
