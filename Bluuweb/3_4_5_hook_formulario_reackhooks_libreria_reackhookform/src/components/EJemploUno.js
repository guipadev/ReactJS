import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EjemploUno = () => {
  // Constante validación libreria react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [Entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...Entradas, data]);
    e.target.reset(); //Limpiar despues de enviado
  };

  return (
    <>
      <div className="container">
        <h1>Ejemplo #1 validación [react-hook-form]</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <input
                name="titulo"
                placeholder="Ingrese titulo"
                className="form-control col-md-6"
                autoComplete="off"
                {...register("titulo", {
                  required: "Campo es requerido, máximo 5 caracteres",
                  maxLength: { value: 2, message: "Mínimo 2 letras" },
                })}
              />
              {errors.titulo && (
                <>
                  <span className="text-danger text-small d-block mb-2">
                    {errors.titulo.message}
                  </span>
                </>
              )}
            </div>

            <div className="col-md-6">
              <input
                name="descripcion"
                placeholder="Ingrese descripcion"
                className="form-control col-md-6"
                autoComplete="off"
                {...register("descripcion", {
                  required: "Campo es requerido, máximo 10 caracteres",
                  maxLength: 10,
                })}
              />
              {errors.descripcion && (
                <span className="text-danger text-small d-block mb-2">
                  {errors.descripcion.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Caracteristicas u observaciones que quieras decir..."
                rows="3"
              />
            </div>

            {/*
              Registrar campos
              Uno de los conceptos clave en React Hook Form es registrar su componente en el gancho.
              Esto hará que su valor esté disponible tanto para la validación como para el envío del formulario.
              
              Nota: Se requiere que cada campo tenga un nombre como clave para el proceso de registro.
            */}

            <div>
              <label>Campo Primer Nombre:</label>
              <input {...register("firstName")} />
              <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>

            <br/><br/>

            {/*
              Aplicar validación
              React Hook Form facilita la validación de formularios al alinearse con el estándar HTML existente para la validación de formularios.

              Lista de reglas de validación admitidas:
              required 
              min
              max
              minLength
              maxLength
              pattern
              validate
            */}

            <div className="row">
              <div className="col-6">
                <label>Ingrese Primer Nombre:</label>
                <input
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
              </div>
              <div className="col-6">
                <label>Ingrese Segundo Nombre:</label> 
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> {/*Solo letras*/} 
              </div>
              <div className="col-6">
                <label>Ingrese Edad:</label>
                <input
                  type="number"
                  {...register("age", { min: 18, max: 99 })} // Debe ingresar un número min o max al especificado
                />
              </div>
            </div>
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            Agregar
          </button>
        </form>
        <ul>
          {Entradas.map((item) => (
            <li>
              {item.titulo} - {item.descripcion}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EjemploUno;
