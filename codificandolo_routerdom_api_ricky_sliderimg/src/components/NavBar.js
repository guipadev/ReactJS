import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="btn btn-outline-primary">
            Inicio
          </Link>
          <Link to="/personajes" className="btn btn-outline-primary">
            Personajes Ricky & Morty (Axios consumo API)
          </Link>
          <Link to="/slider" className="btn btn-outline-primary">
            Slider de imagenes
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/*
<nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="btn btn-outline-primary">
          Inicio
        </NavLink>
        <NavLink to="/personajes" className="btn btn-outline-primary">
          Personajes Ricky & Morty (Axios consumo API)
        </NavLink>
        <NavLink to="/slider" className="btn btn-outline-primary">
          Slider de imagenes
        </NavLink>
      </div>
    </nav>
*/
