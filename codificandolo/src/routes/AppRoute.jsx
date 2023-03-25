import { Routes, Route } from "react-router-dom";
import App from "../App";
import RutaEjemplo from "../routes/RutaEjemplo"
import { Usuarios } from "./Usuarios"
import { Especifico } from "../components/Especifico";
import { BlogPost } from "../pages/BlogPost";
import { Inicio } from "../components/component_firebase/Inicio";
import { Admin } from "../components/component_firebase/Admin";
import { Login } from "../components/component_firebase/Login";

export default function AppRoute() {
  return (
    <>
      <h1>Rutas en ReactJS</h1>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ejemplo" element={<RutaEjemplo />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/especifico/:id" element={<Especifico />} />
        <Route path="/blog/:postSlug" element={<BlogPost />} />
        {/* FIREBASE */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
