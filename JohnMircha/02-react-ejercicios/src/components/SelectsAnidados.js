import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  // página https://api.copomex.com
  const TOKEN = "587c8e7f-19e5-4cdb-808b-713b70790a9d";

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h6>Activar en el navegador bloquear politicas de CORS 🪲</h6>
      <h3>México</h3>
      <SelectList
        title="estado"
        url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipios"
          url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
      <pre style={{backgroundColor: 'tomato'}}>
        <code style={{color: 'white', fontSize: '20px'}}>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
