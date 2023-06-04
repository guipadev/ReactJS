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

/**
 * declaramos un estado para almacenar el valor de los controles deslizantes usando
 * el hook useState.
 * Pasaremos el valor inicial del estado como {} dentro del hook useState,
 * porque estamos almacenando nuestros datos como un objeto.
 */
function App() {
  /**
   * useState para crear una nueva variable de estado llamada data
   * y una función llamada setData que podemos usar para actualizar el estado.
   */
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
            {/* pasaremos el estado data y setData como accesorio al componente SliderSelect 👇*/}
            <SliderSelect data={data} setData={setData} />
            {/* estado data y setData como accesorio al TenureSelect 👇 */}
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
