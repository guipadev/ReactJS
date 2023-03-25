import React from "react";
import { Routes, Route } from "react-router-dom";

//Views
import App from "../App";
import Inicio from "../components/Inicio";

import Estado from "../components/Estado";
import RenderizadoCondicional from "../components/RenderizadoCondicional";
import RenderizadoElementos from "../components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "../components/Eventos";
import ComunicacionComponentes from "../components/ComunicacionComponentes"
import CicloVida from "../components/CicloVida";
import AjaxApis from "../components/AjaxApis";
import ContadorHooks from "../components/ContadorHooks";
import ScrollHooks from "../components/ScrollHooks";
import RelojHooks from "../components/RelojHooks";
import AjaxHooks from "../components/AjaxHooks";
import HooksPersonalizados from "../components/HooksPersonalizados";
import Referencias from "../components/Referencias";
import Formularios from "../components/Formularios";
import Estilos from "../components/Estilos";
import ComponentesEstilizados from "../components/ComponentesEstilizados";

import NoEncontrada from "../components/NoEncontrada";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="estado" element={<Estado />} />
        <Route path="renderizadoCondicional" element={<RenderizadoCondicional />} />
        <Route path="renderizadoElementos" element={<RenderizadoElementos />} />
        <Route path="EventosES6" element={<EventosES6 />} />
        <Route path="EventosES7" element={<EventosES7 />} />
        <Route path="MasSobreEventos" element={<MasSobreEventos />} />
        <Route path="ComunicacionComponentes" element={<ComunicacionComponentes />} />
        <Route path="CicloVida" element={<CicloVida />} />
        <Route path="AjaxApis" element={<AjaxApis />} />
        <Route path="ContadorHooks" element={<ContadorHooks />} />
        <Route path="ScrollHooks" element={<ScrollHooks />} />
        <Route path="RelojHooks" element={<RelojHooks />} />
        <Route path="AjaxHooks" element={<AjaxHooks />} />
        <Route path="HooksPersonalizados" element={<HooksPersonalizados />} />
        <Route path="Referencias" element={<Referencias />} />
        <Route path="Formularios" element={<Formularios />} />
        <Route path="Estilos" element={<Estilos />} />
        <Route path="ComponentesEstilizados" element={<ComponentesEstilizados />} />

        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
