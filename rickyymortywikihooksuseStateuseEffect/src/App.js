import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import CardDetails from "./components/Card/CardDetails";

import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

//Dentro de la función del componente de la aplicación, creeamos un nuevo componente 
//de enrutador y este dentro del componente de barra de navegación

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar />
      </div>
      {/*
        *Necesitamos definir todas nuestras rutas. Recuerde, Routes es una colección de Routes. 
        *La Route es la ruta real del archivo. Cada ruta requiere 2 cosas: 
        *la ruta a la que realmente conducirá la aplicación y el elemento que se cargará. 👇
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

//componente funcional llamado Home y el cual contendra los démas componentes de la aplicación 👇
const Home = () => {
  
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  //useState para almacenar nuestro estado, género y especie
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
  
  //variable api de acuerdo con nuestras variables de useState. 👇
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  

  //Para obtener datos de esta API, usaremos el hook huseEffect
  useEffect(() => { }, [api]);

  //Esto significa que, en caso de que cambie la variable api, queremos cargar datos nuevos y frescos
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      //console.log(data);
      setFetchedData(data)
    })();
  }, [api]);

  /*
  Estamos usando una función asincrónica para recuperar nuestros datos sin procesar 
  y luego los convertimos a formato JSON. Revisemos la consola para ver lo que tenemos 
  en el Objeto que tiene la información consumida de la API
  
  Si cambiamos el número de página a 2 dentro de la API y encontrará nuevos datos
  y podremos verifica en la consola
  */

  return (
    <>
      <div className="App">
          <h1 className="text-center mb-3">Characters</h1>
          <Search updatePageNumber={updatePageNumber} setSearch={setSearch} />
          
          <div className="container">
            <div className="row">
              {/*importaremos nuestro componente de filtro dentro de nuestra aplicación, donde su componente de filtro escrito se colocará aquí. Además, pasamos todos estos accesorios obligatorios: 👇*/}
              <Filter
                pageNumber={pageNumber}
                status={status}
                updateStatus={updateStatus}
                updateGender={updateGender}
                updateSpecies={updateSpecies}
                updatePageNumber={updatePageNumber}
              />
              <div className="col-lg-8 col-12">
                <div className="row">
                  {/* 👇 para que se refiera a la página de inicio */}
                  <Card page="/" results={results} />
                </div>
              </div>
            </div>
          </div>
          <Pagination
            info={info}
            pageNumber={pageNumber} 
            setPageNumber={updatePageNumber} 
          />
        </div>
    </>
  );
}

export default App;
