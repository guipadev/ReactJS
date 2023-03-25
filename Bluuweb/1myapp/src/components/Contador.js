import React, { useState, Fragment } from "react";

const Contador = () => {

    //Primero va nombre del estado "numero" y luego el que lo modifica "setNumero"
    //useState especifica el valor inicial de "numero", este podria ser int, boolean, string...
    const [numero, setNumero] = useState(0);

    //función Hook que realizara un cambio de acuerdo a un evento
    const aumentar = () => {
        setNumero(numero + 1)
    }

    return (
        //Para pintar varios elementos encerrar en un "div"
        //Si no es necesario se debe encerrar en "Fragment"
        <Fragment>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={aumentar} >Aumentar</button>
        </Fragment>
      );
}
 
export default Contador ;