import React, {Fragment, useState} from "react";

const Lista = () => {
    //Ejemplo concatenación de arrays
    const arrayUno = ['Chile', 'Argentina']
    const arrayDos = ['Peru', 'Mexico']

    const Unidos = [...arrayUno, ...arrayDos]
    console.log(Unidos)

    const [numeros, setNumeros] = useState([1,2,3,4,5,6])

    const [numero, setNumero] = useState(1)

    const agregarElemento = () => {

        setNumero(numero + 1);

        setNumeros( [...numeros, numero] );
    }

    return ( 
        <Fragment>
            <button onClick={agregarElemento}>Agregar</button>
            <ul>
                {   //Siempre va solicitar una key para representar cada elemento React en este caso pusimos "index"
                    numeros.map((item, index) => 
                        <li key={index}>
                            {item} - {index}
                        </li>
                    )
                }
            </ul>
        </Fragment>
     );
}
 
export default Lista


