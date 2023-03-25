import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
        
            <NavLink to="/"> Home </NavLink> {" "}
            <NavLink to="/Bootstrap"> Bootstrap </NavLink> {" "}
            <NavLink to="/Bulma"> Bulma </NavLink> {" "}
            <NavLink to="/ReactBootstrap"> ReactBootstrap </NavLink> {" "}
            <NavLink to="/MaterialUI"> MaterialUI </NavLink>
        
        {/*
        <a href="/"> Home </a> {" "}
            <a href="/Bootstrap"> Bootstrap </a> {" "}
            <a href="/Bulma"> Bulma </a> {" "}
            <a href="/ReactBootstrap"> ReactBootstrap </a> {" "}
        <a href='/MaterialUI'>MaterialUI</a>
        */}
    </nav>
  )
}

export default Navbar