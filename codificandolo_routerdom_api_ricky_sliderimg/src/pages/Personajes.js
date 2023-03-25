import { useEffect, useState } from "react";
import { todosPersoajes } from "../funciones/funciones";

export const Personajes = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersoajes(setPersonajes);
  }, []);

  return (
    <>
      {personajes !== null ? (
          personajes.map(personaje => (
            <div key={personaje.id}>
                <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
                {/* <img src={personaje.image} alt="animecs"/> */}
            </div>              
          ))
      ) : "no hay personajes"}
    </>
  );
};
