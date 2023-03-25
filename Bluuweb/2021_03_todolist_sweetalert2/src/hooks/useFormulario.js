import { useState } from "react";

export const useFormulario = (initialSatate = {}) => {

    const [inputs, setInputs] = useState(initialSatate)

     //Relacion del input con su propiedad correspondiente
     const handleChange = (e) => {
        //Destructuramos
        const { name, value, checked, type } = e.target;

        //Mantener los valores de las propiedades
        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    //Reiniciar a estado original
    const reset = () => {
        setInputs(initialSatate)
    }

    return [inputs, handleChange, reset]
}