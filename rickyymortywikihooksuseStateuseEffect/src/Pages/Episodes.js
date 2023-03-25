import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/Category/InputGroup";

//Estados para retener y cambiar información crucial para obtener datos de nuestra API: 👇
const Episodes = () => {
    let [results, setResults] = React.useState([]);
    let [info, setInfo] = useState([]);
    let { air_date, episode, name } = info;
    let [id, setID] = useState(1);

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    //obtener datos de nuestra API: 👇
    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          setInfo(data);
      
          let a = await Promise.all(
            data.characters.map((x) => {
              return fetch(x).then((res) => res.json());
            })
          );
          setResults(a);
        })();
      }, [api]);

    
    //mostrar los resultados en nuestra pantalla. 
    //Primero, mostrar nombre del episodio y fecha de emisión de esta manera: 👇
    return (
        <div className="container">
            <div className="row mb-3">
                <h1 className="text-center mb-3">
                    Episode name :{" "}
                    <span className="text-primary">
                        {name === "" ? "Unknown" : name}
                    </span>
                </h1>
                <h5 className="text-center">
                    Air Date: {air_date === "" ? "Unknown" : air_date}
                </h5>
            </div>
            {/* mostremos las tarjetas de personajes y los grupos de entrada: 👇 */}
            <div className="row">
                <div className="col-lg-3 col-12 mb-4">
                    <h4 className="text-center mb-4">
                        Pick Episode
                    </h4>
                    <InputGroup 
                        name="Episode" 
                        changeID={setID} 
                        total={51} 
                    />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        {/* implemente ajuste esta pequeña línea: 👇 */}
                        <Card page="/episodes/" results={results} />
                    </div>
                </div>
            </div>       
        </div>  
    );
}
 
export default Episodes;