/**
 * Crearemos una barra de navegación muy simple para mostrar el logotipo
 */

// crear una barra de navegación superior en la interfaz de usuario
import AppBar from "@mui/material/AppBar";
// componente Barra de herramientas puede contener elementos como botones, texto e íconos, y también se puede usar para crear un diseño receptivo que se adapte a diferentes tamaños de pantalla
import Toolbar from "@mui/material/Toolbar";
// aplicar estilos tipográficos predefinidos a elementos de texto
import Typography from "@mui/material/Typography";
// crear un elemento contenedor que se puede usar para crear un diseño receptivo y centrar y contener otros elementos en una interfaz de usuario
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Banco Mundo Mujer</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
