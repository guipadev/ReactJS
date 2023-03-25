import React from "react"; //Desde aquí tambien se podria invocar {useEffect}

const ConsumoAPI = () => {
  const [equipo, setEquipo] = React.useState([]);

  //Se invoca de esta manera useEffect ya que puede aparecer, pero se puede llamar desde arriba
  React.useEffect(() => {
    console.log("useEffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    console.log(users);
    setEquipo(users);
  };

  return (
    <div>
      <h1>Obteniendo datos de la API de la web JSONPlaceholder</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsumoAPI;
