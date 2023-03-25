import React from 'react'
import { NavLink } from 'react-router-dom'

const Inicio = () => {
  return (
    <>
      <h1>Aquí podra dirigite para ver cada framework de estilo</h1>
      <NavLink to="/"> Home </NavLink> {" "}
      <NavLink to="/Bootstrap"> Bootstrap </NavLink> {" "}
      <NavLink to="/Bulma"> Bulma </NavLink> {" "}
      <NavLink to="/ReactBootstrap"> ReactBootstrap </NavLink> {" "}
      <NavLink to="/MaterialUI"> MaterialUI </NavLink>
    </>
  )
}

export default Inicio