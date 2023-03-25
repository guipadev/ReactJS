import React, { useState, useEffect } from "react";

const initailForm = {
  name: "",
  constellation: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  // Se ejecuta cuando var dataToEdit cambia, conecta el boton con los campos
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    // Actualizar datos del formulario 
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Alerta si no hay campos en las var
    if (!form.name || !form.constellation) {
      alert("Datos incompletos");
      return;
    }

    // Dependiendo si tiene o no ID podra realizar accion/funcion crear o actualizar
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    // Ejecuta funcion
    handleReset();
  };

  // Reset campos formulario y var data
  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      {/* Si la var dataToEdit trae algo dira edita si no agregar  */}
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelación"
          onChange={handleChange}
          value={form.constellation}
        />
        <input 
          type="submit" 
          value="Enviar" 
          class="btn btn-success"
        />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
