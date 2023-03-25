import React from "react";

const {useState} = React; //Cualquier cambio de estado renderice la pantalla

const Searchbar = (props) => {
    const { onSearch } = props;
    const [ search, setSearch] = useState(""); //regresa array vacion el indice más actualizado
    
    //La base de como poder actualiar la vista, cuando utilizamos variables que debemos cambiar
    //Renderiza cuando hay cambios
    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
          onSearch(null);
        }
      };

    const onClick = async (e) => {
        onSearch(search)
    };
 
    return (
        <div className = "searchbar-container">
            <div className="searchbar">
                <input placeholder = "Buscar pokemon..." onChange = {onChange} />
            </div>
            <div className = "searchbar-btn">
                <button onClick = {onClick}>Buscar</button>
            </div>
            {/* PRUEBA OBTENCION POKEMON Y SUS DATOS
            <div>
                {pokemon &&
                    <div>
                        <div>Nombre: {pokemon.name}</div>
                        <div>Peso: {pokemon.weight}</div>
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                }
            </div>
            */}
        </div>
    )  
}

export default Searchbar;