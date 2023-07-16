import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC = () => {

 return (
    <Container maxWidth="xl">
      <HeaderComponent
        title = "Mundo ReactJS"
        description="Biblioteca para crear interfaces de usuarios"
        element={
          <Button fullWidth variant="contained">
            🐣
          </Button>}
      >

      </HeaderComponent>
    </Container>
  );
};
