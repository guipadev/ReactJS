import React from "react";
import { useForm } from "react-hook-form";

const FormHooks = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //const onSubmit = data => console.log(data);

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset(); //cada vez que se envie limpie el formulario
  };

  console.log(watch("example")); // mire el valor de "input" pasando el nombre del mismo

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Formulario utilizando [React Hook Form]</h1>
          {/* "handleSubmit" validará los campos de entradas antes de invocar "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)} className="row">

            <div className="col-6">
                {/* registre su entrada en el "hook" invocando la función "register" */}
                <input defaultValue="Vr x defecto sin validación" {...register("ejemplo1")} />
            </div>
            
            <div className="col-6">
                {/* incluir la validación con las reglas de validación de HTML requeridas u otras estándar*/}
                <input
                    placeholder="Campo req. + msj error"
                    {...register("ejemplo2", { required: true })} 
                />
                {/* los errores volverán cuando la validación del campo falle  */}
                {errors.ejemplo2 && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
            </div>
            
            <br/><br/>
            
            <button className="btn btn-primary">Enviar</button>
          
          </form>
        </div>
      </div>
    </>
  );
};

export default FormHooks;
