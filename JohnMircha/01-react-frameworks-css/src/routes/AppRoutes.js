import React from "react";

import { Routes, Route } from "react-router-dom";

import App from "../App";
import Inicio from "../components/Inicio";
import Bootstrap from "../components/Bootstrap";
import Bulma from "../components/Bulma";
import ReactBootstrap from "../components/ReactBootstrap";
import MaterialUI from "../components/MaterialUI";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="Bootstrap" element={<Bootstrap />} />
        <Route path="Bulma" element={<Bulma />} />
        <Route path="ReactBootstrap" element={<ReactBootstrap />} />
        <Route path="MaterialUI" element={<MaterialUI />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
