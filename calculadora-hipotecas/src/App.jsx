/*
se usa para crear un diseño receptivo que se adapta a diferentes tamaños de pantalla. 
Grid container representa el elemento padre y Grid item representa el elemento hijo.
En el Grid componente escribimos algo llamado spacing={5}. 
Esta es la forma de agregar espacio entre los elementos de la cuadrícula.
En el Grid componente también escribimos, xs={12} lo que significa que el elemento de la cuadrícula 
ocupará todo el ancho de la pantalla en pantallas extra pequeñas. 
Del mismo modo, md={6} significa que el elemento de la cuadrícula ocupará la mitad de la pantalla 
en pantallas medianas y grandes.
 */
import { useState } from "react";
import { Grid } from "@mui/material";
// Container escribimos algo llamado sx={{marginTop:4}}. Esta es la forma de agregar un estilo en línea a un componente en Material UI.
import { Container } from "@mui/system";

import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TernureSelect";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            {/* this is where we write the code  👇 */}
            <SliderSelect data={data} setData={setData} />

            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
