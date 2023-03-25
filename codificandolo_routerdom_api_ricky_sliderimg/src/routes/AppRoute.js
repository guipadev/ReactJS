import { Routes, Route } from "react-router-dom";
import App from "../App";
import { Inicio } from "../pages/Inicio";
import { Personaje } from "../pages/Personaje";
import { Personajes } from "../pages/Personajes";
import { Slider } from "../pages/Slider";

export const AppRoute = () => {
  return (
    <>
        <Routes>
          <Route exact path='/' element={<App />}>
            <Route index element={<Inicio />} />
            <Route path='/personajes' element={<Personajes />} />
            <Route path='/personaje/:id' element={<Personaje />} />
            <Route path='/slider' element={<Slider />} />
          </Route>
        </Routes>
    </>
  )
}
