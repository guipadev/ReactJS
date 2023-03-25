import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import Card from "./components/Card";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      {/*
        *Necesitamos definir todas nuestras rutas. Recuerde, Routes es una colección de Routes. 
        *La Route es la ruta real del archivo. Cada ruta requiere 2 cosas: 
        *la ruta a la que realmente conducirá la aplicación y el elemento que se cargará. 👇
      */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

//componente funcional llamado Home y el cual contendra los démas componentes de la aplicación 👇
const Home = () => {
  
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  //useState para almacenar nuestro estado, género y especie
  let [status, updateStatus] = useState("");
  
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
  
  //variable api de acuerdo con nuestras variables de useState. 👇
  //let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  let api = `https://api.itbook.store/1.0/search/mongodb/1`


  //Para obtener datos de esta API, usaremos el hook huseEffect
  useEffect(() => { }, [api]);

  //Esto significa que, en caso de que cambie la variable api, queremos cargar datos nuevos y frescos
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
      setFetchedData(data)
    })();
  }, [api]);

 
  return (
    <>
      <div className="App">
          <h1 className="text-center mb-3">Books</h1>
          <Search updatePageNumber={updatePageNumber} setSearch={setSearch} />
          
          <div className="container">
            <div className="row">
              {/*importaremos nuestro componente de filtro dentro de nuestra aplicación, donde su componente de filtro escrito se colocará aquí. Además, pasamos todos estos accesorios obligatorios: 👇*/}
              <Filter
                pageNumber={pageNumber}
                status={status}
                updateStatus={updateStatus}
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
