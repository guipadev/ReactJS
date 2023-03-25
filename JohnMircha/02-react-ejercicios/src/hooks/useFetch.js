import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Se ejecuta cada vez que cambie la URL
  useEffect(() => {
    // Si no sirve la petición ejecuta Abort
    const abortController = new AbortController();
    const signal = abortController.signal;

    // Petición asyncroa, logica petición fetch
    const fetchData = async () => {
      setLoading(true);

      // Capturar error
      try {
        const res = await fetch(url, { signal });

        if (!res.ok) {
          let err = new Error("Error en la petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          // captura y muestra error del catch
          throw err;
        }

        // Si no hay error comvierte rta a JSON
        const json = await res.json();

        // Si no hubo error actualizar variables
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // desmontaje
    return () => abortController.abort();
  }, [url]);

  // Retonrna objeto
  return { data, error, loading };
};
