import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // controlar los datos
  const [data, setData] = useState(null);
  // variable controle la funcion de pendiente 
  const [isPending, setIsPending] = useState(true);
  // variable en caso de un error manipularlo
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        // Obteniendo el error cuando la Rta sea falsa en un objeto
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }
        
        // Convertir a JSON la Rta exitosa
        let data = await res.json();

        // Actualizamos las 3 variables de estado
        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        // Actualizar los 2 estados de pdte y error
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
