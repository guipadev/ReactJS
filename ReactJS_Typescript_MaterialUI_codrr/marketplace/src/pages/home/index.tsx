import { Button, Container } from "@mui/material";
import { useNotification } from "../../context/notification.context";

export const HomePage: React.FC = () => {

  const { getError } = useNotification()

  const handleClick = () => {
    getError("Hola mundo")
  }

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button 
        onClick={handleClick}
        fullWidth 
        variant="contained"
      >
        Componente Pagina Home
      </Button>
    </Container>
  );
};
