import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

// valores iniciales como parametro valores iniciales y validacion
export const useForm = (initialForm, validateForm) => {
  // seteo del parametro
  const [form, setForm] = useState(initialForm);
  // Almacenar los errores
  const [errors, setErrors] = useState({});
  // cargando...
  const [loading, setLoading] = useState(false);
  // Rta de envío
  const [response, setResponse] = useState(null);

  // Cambio de valores cuando escribimos
  const handleChange = (e) => {
    // Destructura para no tenete el [e.target.name]:e.target.value
    const { name, value } = e.target;

    // Copia del formulario
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Validaciones cuando se pierda el foco
  const handleBlur = (e) => {
    //Crear copia del formulario que ya lo hace handleChange
    handleChange(e);
    // Validación de cada variable del formulario
    setErrors(validateForm(form));
  };

  // Envío formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateForm(form));

    // Validar que el objeto error venga vacio 
    if (Object.keys(errors).length === 0)  {
      alert("Enviando Formulario");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/yaormu@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }
  };

  // retornar objeto ya no es necesario por sintaxis de objeto llarmarse form: form
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
