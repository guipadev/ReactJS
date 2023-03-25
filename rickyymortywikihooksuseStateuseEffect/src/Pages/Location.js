import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/Category/InputGroup";

const Location = () => {
    
    let [results, setResults] = useState([]);
    let [info, setInfo] = useState([]);
    let { dimension, type, name } = info;
    let [number, setNumber] = useState(1);

    let api = `https://rickandmortyapi.com/api/location/${number}`;

    //cambie solo una palabra clave en el hook useEffect, de characters a residents, así: 👇
    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          setInfo(data);
      
          let a = await Promise.all(
            data.residents.map((x) => {
              return fetch(x).then((res) => res.json());
            })
          );
          setResults(a);
        })();
      }, [api]);
    
    //realice estos cambios: 👇
    return (
        <div className="container">
            <div className="row mb-3">
                <h1 className="text-center mb-3">
                    Location:
                    <span className="text-primary">
                        {name === "" ? "Unknown" : name}
                    </span>
                </h1>
                <h5 className="text-center">
                    Dimension: {dimension === "" ? "Unknown" : dimension}
                </h5>
                <h6 className="text-center">
                    Type: {type === "" ? "Unknown" : type}
                </h6>
            </div>
            {/* mostremos las tarjetas de personajes y los grupos de entrada: 👇 */}
            <div className="row">
                <div className="col-lg-3 col-12 mb-4">
                    <h4 className="text-center mb-4">
                        Pick Episode
                    </h4>
                    {/* realice estos cambios para nuestro componente InputGroup: 👇 */}
                    <InputGroup 
                        name="Location" 
                        changeID={setNumber} 
                        total={126} 
                    />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        {/* Al igual que en Episodios.js, solo ajusta esta pequeña línea: 👇 */}
                        <Card page="/location/" results={results} />
                    </div>
                </div>
            </div>       
        </div>  
    );
}
 
export default Location;