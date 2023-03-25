import React from "react";
import { useForm } from "react-hook-form";

// El siguiente componente es un ejemplo de su componente de Input existente
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// puedes usar React.forwardRef para pasar la referencia también
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

const EjemploDos = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  );
};

export default EjemploDos