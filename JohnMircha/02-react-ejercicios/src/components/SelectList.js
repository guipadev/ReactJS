import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  //console.log(data, error, loading);

  // Si data esta si valor dar igual a null, en vez de estar mostrarndo que esta cargando 
  if (!data) return null;

  // Si existe un error mostrar un msj al respecto
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  // Convertir primera letra en Mayuscula
  let label = title.charAt(0).toUpperCase() + title.slice(1);

  // Guarde lo que vienen pero en la propiedad title 
  let options = data.response[title];
  //console.log(options);

  return (
    <>
      <label htmlFor={id}> {label} </label>
      {
        loading && <Loader />
      }
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {
          data &&
            options.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
          ))
        }
      </select>
    </>
  );
};

export default SelectList;
